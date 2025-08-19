import { createBidEntry } from "./createBidEntry.mjs";

/**
 * Takes the bids, sorts them so the biggest amount is first,
 * then creates and appends rows with bids to the container.
 */
export const renderBidsHistory = (bidsArray, container) => {
  if (!Array.isArray(bidsArray)) {
    bidsArray = [];
  }

  container.innerHTML = "";

  const bidsCopy = bidsArray.slice();
  bidsCopy.sort(function (a, b) {
    if (b.amount !== a.amount) {
      return b.amount - a.amount;
    }
    // newer date first if the same amount
    return new Date(b.created) - new Date(a.created);
  });

  bidsCopy.forEach((bid, index) => {
    const row = createBidEntry(bid, index);
    container.appendChild(row);
  });
};
