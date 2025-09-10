import { describe, it, expect, beforeEach, vi } from "vitest";
import { getFromStorage } from "./getFromStorage.mjs";
import { requestOptions } from "./requestOptions.mjs";

vi.mock("./getFromStorage.mjs", () => ({ getFromStorage: vi.fn() }));

describe("requestOptions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("uses env API key from .env.test and user token", () => {
    getFromStorage.mockReturnValue({ accessToken: "user-token-123" });

    const result = requestOptions("POST", { name: "John" });

    expect(result).toEqual({
      method: "POST",
      headers: {
        Authorization: "Bearer user-token-123",
        "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John" }),
    });
  });

  it("defaults to GET", () => {
    getFromStorage.mockReturnValue({ accessToken: "token" });
    const result = requestOptions();
    expect(result.method).toBe("GET");
  });

  it("handles missing user data", () => {
    getFromStorage.mockReturnValue(null);
    const result = requestOptions("POST", { data: "x" });
    expect(result.headers.Authorization).toBe("Bearer undefined");
  });
});
