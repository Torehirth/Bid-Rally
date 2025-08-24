import { getHighestBid } from "../../../utils/auctions/getHighestBid.mjs";

export const createCurrentBidColumn = (auctionData) => {
  const bidCol = document.createElement("div");

  // Current bid label
  const bidLabel = document.createElement("p");
  bidLabel.className = "mb-1 text-sm text-black/80";
  bidLabel.textContent = "Current Highest Bid";

  // Current bid amount
  const bidAmount = document.createElement("p");
  bidAmount.className = "text-dark-green text-3xl font-bold";
  bidAmount.id = "current-bid";

  const amount = getHighestBid(auctionData);
  bidAmount.textContent = amount;

  // Bid count
  const bidCount = document.createElement("p");
  bidCount.className = "text-sm text-black/80";
  bidCount.id = "bid-count";
  bidCount.textContent = `${auctionData?._count?.bids || 0} bids placed`;

  bidCol.appendChild(bidLabel);
  bidCol.appendChild(bidAmount);
  bidCol.appendChild(bidCount);

  return bidCol;
};
