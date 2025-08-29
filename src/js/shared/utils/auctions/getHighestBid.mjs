/**
 * Finds and returns the highest bid amount from an array of bids.
 *
 * @param {Object} data - The data object containing bids information
 * @param {Array<Object>} [data.bids=[]] - Array of bid objects, each containing an amount property
 * @param {number|string} data.bids[].amount - The bid amount (will be converted to number)
 * @returns {number} The highest bid amount, or 0 if no bids exist
 *
 * @example
 * const auctionData = {
 *   bids: [
 *     { amount: "100" },
 *     { amount: "250" },
 *     { amount: "150" }
 *   ]
 * };
 * const highest = getHighestBid(auctionData); // Returns 250
 *
 * @example
 * const emptyAuction = { bids: [] };
 * const highest = getHighestBid(emptyAuction); // Returns 0
 */
export const getHighestBid = (data) => {
  const bidsArray = data.bids || [];
  const bidAmounts = bidsArray.map((bid) => Number(bid.amount));

  let highestBid = 0;
  if (bidAmounts.length) {
    highestBid = Math.max(...bidAmounts);
  }
  return highestBid;
};
