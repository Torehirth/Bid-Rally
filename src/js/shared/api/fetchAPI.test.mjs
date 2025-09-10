import { describe, it, expect, beforeAll, beforeEach, vi } from "vitest";

// stub globals first
vi.stubGlobal("fetch", vi.fn());

// mock requestOptions and displayMessage modules
vi.mock("../utils/common/requestOptions.mjs", () => ({
  requestOptions: vi.fn(() => ({
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })),
}));
vi.mock("../utils/common/displayMessage.mjs", () => ({
  displayMessage: vi.fn(),
}));

// import mocked modules so we can assert on them
import { requestOptions } from "../utils/common/requestOptions.mjs";
import { displayMessage } from "../utils/common/displayMessage.mjs";

let fetchAPI;
describe("fetchAPI", () => {
  beforeAll(async () => {
    vi.stubEnv("VITE_API_BASE_URL", "https://example.test");
    ({ fetchAPI } = await import("./fetchAPI.mjs")); // import AFTER mocks
  });

  beforeEach(() => vi.clearAllMocks());

  it("returns JSON on success", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ ok: true }) });
    const res = await fetchAPI("#c", "auction/listings", "limit=1");
    expect(res).toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledWith(
      "https://example.test/auction/listings?limit=1",
      expect.any(Object)
    );
    expect(requestOptions).toHaveBeenCalled();
  });

  it("shows API error messages", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ errors: [{ message: "Bad request" }] }),
    });
    await fetchAPI("#err", "auction/listings");
    expect(displayMessage).toHaveBeenCalledWith("#err", "error", "Bad request");
  });

  it("handles network errors", async () => {
    fetch.mockRejectedValueOnce(new Error("Network down"));
    await fetchAPI("#err", "auction/listings");
    expect(displayMessage).toHaveBeenCalledWith("#err", "error", "Network down");
  });
});
