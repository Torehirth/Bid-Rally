/**
 * Creates a debounced version of the provided callback. The returned function
 * postpones invoking the callback until after `wait` milliseconds have elapsed
 * since the last time it was called. Any arguments passed to the returned
 * function are forwarded to the original callback.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} wait - Delay in milliseconds to wait before invoking the callback.
 * @returns {(...args: any[]) => void} A debounced function that accepts any arguments and returns nothing.
 */
export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), wait);
  };
};
