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
