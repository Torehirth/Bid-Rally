import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debounce } from "./debounce.mjs";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should call the callback only once after wait time", () => {
    const callback = vi.fn();
    const debouncedFn = debounce(callback, 200);

    // Call multiple times quickly
    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Nothing should happen immediately
    expect(callback).not.toHaveBeenCalled();

    // Advance time just before wait
    vi.advanceTimersByTime(199);
    expect(callback).not.toHaveBeenCalled();

    // Advance past wait
    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments to the callback", () => {
    const callback = vi.fn();
    const debouncedFn = debounce(callback, 100);

    debouncedFn("hello", 42);
    vi.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledWith("hello", 42);
  });
});
