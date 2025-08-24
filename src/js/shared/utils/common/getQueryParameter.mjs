export const getQueryParameter = (id) => {
  const queryParam = window.location.search;
  const searchParams = new URLSearchParams(queryParam);
  const hasId = searchParams.has(id);
  if (!hasId) {
    return;
  }
  const auctionId = searchParams.get(id);
  return auctionId;
};
