/**
 * Creates ONE bid row.
 * first row (index === 0) is the "highest bid".
 */
export const createBidEntry = (bids, index) => {
  const bidEntry = document.createElement("div");
  bidEntry.className = "flex items-center justify-between px-6 py-4";

  // Left side
  const leftSide = document.createElement("div");
  leftSide.className = "flex items-center space-x-4";

  const positionWrapper = document.createElement("div");
  positionWrapper.className = "flex-shrink-0";

  const positionCircle = document.createElement("div");
  const isHighestBid = index === 0;

  // Green or gray circles
  positionCircle.className = isHighestBid
    ? "bg-mint-green flex h-8 w-8 items-center justify-center rounded-full"
    : "flex h-8 w-8 items-center justify-center rounded-full bg-gray-200";

  const positionNumber = document.createElement("span");
  positionNumber.className = isHighestBid
    ? "text-xs font-semibold text-black"
    : "text-xs font-semibold text-black/80";
  positionNumber.textContent = (index + 1).toString();

  const userDetails = document.createElement("div");

  const username = document.createElement("p");
  username.className = "text-sm font-medium";
  username.textContent = bids?.bidder?.name || "Anonymous";

  const timestamp = document.createElement("p");
  timestamp.className = "text-xs text-black/80";
  timestamp.textContent = new Date(bids.created).toLocaleString();

  // Right side
  const rightSide = document.createElement("div");
  rightSide.className = "text-right";

  const amount = document.createElement("p");
  amount.className = isHighestBid
    ? "text-dark-green text-lg font-semibold"
    : "text-lg font-semibold";

  amount.textContent = `$${bids?.amount || "-"}`;

  if (isHighestBid) {
    const highestLabel = document.createElement("p");
    highestLabel.className = "text-xs text-black/80";
    highestLabel.textContent = "Highest bid";
    rightSide.appendChild(highestLabel);
  }

  positionCircle.appendChild(positionNumber);
  positionWrapper.appendChild(positionCircle);

  userDetails.appendChild(username);
  userDetails.appendChild(timestamp);

  leftSide.appendChild(positionWrapper);
  leftSide.appendChild(userDetails);

  rightSide.insertBefore(amount, rightSide.firstChild);

  bidEntry.appendChild(leftSide);
  bidEntry.appendChild(rightSide);

  return bidEntry;
};
