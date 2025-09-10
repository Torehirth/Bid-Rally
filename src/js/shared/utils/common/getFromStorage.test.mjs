import { describe, it, expect, beforeEach } from "vitest";
import { getFromStorage } from "./getFromStorage.mjs";

describe("getFromStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return parsed JSON data from localStorage", () => {
    const testData = { name: "John", age: 30 };
    localStorage.setItem("user", JSON.stringify(testData));

    const result = getFromStorage("user");

    expect(result).toEqual(testData);
  });

  it("should return null when key does not exist", () => {
    const result = getFromStorage("nonexistent");

    expect(result).toBeNull();
  });

  it("should throw error for invalid JSON", () => {
    localStorage.setItem("invalid", "not valid json{");

    expect(() => getFromStorage("invalid")).toThrow();
  });
});
