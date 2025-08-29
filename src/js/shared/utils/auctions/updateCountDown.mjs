/**
 * Calculates and formats the remaining time until a specified end date
 * @param {string|Date} time - The end date/time to countdown to
 * @returns {{timeLeft: string, isUrgent: boolean}} Object containing formatted time remaining and urgency flag
 * @returns {string} returns.timeLeft - Formatted string showing remaining time or "Expired"
 * @returns {boolean} returns.isUrgent - True if less than 1 day remaining, false otherwise
 * @example
 * // Returns time in days, hours, minutes format when more than 1 day left
 * updateCountDown('2024-12-25T00:00:00Z')
 * // { timeLeft: "5d 10h 30m", isUrgent: false }
 *
 * @example
 * // Returns time in hours, minutes, seconds format when less than 1 day left
 * updateCountDown('2024-12-20T02:30:15Z')
 * // { timeLeft: "2h 30m 15s", isUrgent: true }
 */
export const updateCountDown = (time) => {
  let today = new Date();
  let endDate = new Date(time);

  const timeDifferenceMs = endDate.getTime() - today.getTime();
  const totalSeconds = Math.floor(timeDifferenceMs / 1000);
  const totalMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
  const totalHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  const totalDays = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

  const timeLeftDays = totalDays;
  const timeLeftHours = totalHours % 24;
  const timeLeftMinutes = totalMinutes % 60;
  const timeLeftSeconds = totalSeconds % 60;

  if (today > endDate) {
    return { timeLeft: "Expired", isUrgent: false };
  } else if (timeLeftDays > 0) {
    return {
      timeLeft: `${timeLeftDays}d ${timeLeftHours}h ${timeLeftMinutes}m`,
      isUrgent: false,
    };
  } else {
    return {
      timeLeft: `${timeLeftHours}h ${timeLeftMinutes}m ${timeLeftSeconds}s`,
      isUrgent: true,
    };
  }
};
