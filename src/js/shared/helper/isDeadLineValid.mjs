/**
 * Checks if a deadline has passed by comparing it to the current date and time.
 *
 * @param {string|Date} date - The deadline date to validate. Can be a date string or Date object.
 * @returns {boolean} Returns true if the current date/time is greater than or equal to the deadline (deadline has passed), false otherwise.
 *
 * @example
 * // Check if a deadline has passed
 * const expired = isDeadlineValid('2023-12-01');
 * console.log(expired); // true if current date is past December 1st, 2023
 *
 * @example
 * // Check with a future date
 * const notExpired = isDeadlineValid('2025-01-01');
 * console.log(notExpired); // false if current date is before January 1st, 2025
 */
export const isDeadlineValid = (date) => {
  const today = new Date().getTime();
  const deadline = new Date(date).getTime();
  return today >= deadline;
};
