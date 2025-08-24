export const getHighestBid = (data) => {
  const bidsArray = data.bids || [];
  const bidAmounts = bidsArray.map((bid) => Number(bid.amount));

  let highestBid = 0;
  if (bidAmounts.length) {
    highestBid = Math.max(...bidAmounts);
  }
  return highestBid;
};
