import { describe, it, expect } from "vitest";
import { isDeadlineValid } from "./isDeadLineValid.mjs";

describe("isDeadlineValid", () => {
  it("should return true if the deadline has passed", () => {
    const pastDate = new Date(Date.now() - 1000).toISOString();
    expect(isDeadlineValid(pastDate)).toBe(true);
  });

  it("should return false if the deadline is in the future", () => {
    const futureDate = new Date(Date.now() + 1000).toISOString();
    expect(isDeadlineValid(futureDate)).toBe(false);
  });

  it("should return true if the deadline is exactly the current time", () => {
    const currentDate = new Date().toISOString();
    expect(isDeadlineValid(currentDate)).toBe(true);
  });

  it("should handle invalid date inputs gracefully", () => {
    expect(isDeadlineValid("invalid-date")).toBe(false);
    expect(isDeadlineValid(null)).toBe(false);
    expect(isDeadlineValid(undefined)).toBe(false);
  });

  it("should work with Date objects as input", () => {
    // 1 second in the past
    const pastDate = new Date(Date.now() - 1000);
    // 1 second in the future
    const futureDate = new Date(Date.now() + 1000);
    expect(isDeadlineValid(pastDate)).toBe(true);
    expect(isDeadlineValid(futureDate)).toBe(false);
  });
});
