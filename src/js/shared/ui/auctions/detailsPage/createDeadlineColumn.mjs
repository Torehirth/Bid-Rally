import { updateCountDown } from "../../../utils/auctions/updateCountDown.mjs";

/**
 * Creates the deadline column
 */
export const createDeadlineColumn = (auctionData) => {
  const deadlineCol = document.createElement("div");

  // Deadline label
  const deadlineLabel = document.createElement("p");
  deadlineLabel.className = "mb-1 text-sm text-black/80";
  deadlineLabel.textContent = "Auction Ends";

  // Deadline date
  const deadlineDate = document.createElement("p");
  deadlineDate.className = "text-lg font-semibold";
  deadlineDate.id = "deadline";
  const endDate = new Date(auctionData?.endsAt).toLocaleString();
  deadlineDate.textContent = endDate || "";

  // Time remaining
  const countDownObj = updateCountDown(auctionData?.endsAt);

  const isTimeUrgentClasses = countDownObj.isUrgent
    ? "text-error"
    : "text-dark-green font-bold";

  const timeRemaining = document.createElement("p");
  timeRemaining.id = "time-remaining";
  timeRemaining.textContent = countDownObj.timeLeft || "0";
  timeRemaining.className = isTimeUrgentClasses;

  deadlineCol.appendChild(deadlineLabel);
  deadlineCol.appendChild(deadlineDate);
  deadlineCol.appendChild(timeRemaining);

  return deadlineCol;
};
