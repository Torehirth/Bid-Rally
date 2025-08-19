import { createCurrentBidColumn } from "./createCurrentBidColumn.mjs";
import { createDeadlineColumn } from "./createDeadlineColumn.mjs";

/**
 * Creates the current bid and deadline section
 */
export const createBidSection = (auctionData) => {
  // Main bid container
  const bidContainer = document.createElement("div");
  bidContainer.className = "border-gray/50 rounded-lg border bg-white p-6";

  // Grid for bid info
  const bidGrid = document.createElement("div");
  bidGrid.className = "grid grid-cols-2 gap-4";

  // Current bid column
  const currentBidCol = createCurrentBidColumn(auctionData);

  // Deadline column
  const deadlineCol = createDeadlineColumn(auctionData);

  bidGrid.appendChild(currentBidCol);
  bidGrid.appendChild(deadlineCol);
  bidContainer.appendChild(bidGrid);

  return bidContainer;
};
