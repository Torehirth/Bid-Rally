import { describe, it, expect, beforeEach } from "vitest";
import { filterTags } from "./filterTags";

describe("filterTags", () => {
  let input;

  beforeEach(() => {
    document.body.innerHTML = '<input id="tags" type="text">';
    input = document.querySelector("#tags");
  });

  it("should clean and filter comma-separated tags", () => {
    input.value = " JavaScript , , HTML , CSS  ,, React ,   ";

    const result = filterTags("#tags");

    expect(result).toEqual(["javascript", "html", "css", "react"]);
  });

  it("should handle empty input", () => {
    input.value = "";

    const result = filterTags("#tags");

    expect(result).toEqual([]);
  });

  it("should throw error when element not found", () => {
    expect(() => filterTags("#nonexistent")).toThrow();
  });
});
