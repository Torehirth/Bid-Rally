/**
 * Get the value of a query parameter from the current page's URL.
 *
 * Reads window.location.search and uses URLSearchParams to locate the
 * requested parameter by name. If the parameter is present its string
 * value is returned; if not present the function returns undefined.
 *
 * @param {string} id - The name of the query parameter to retrieve.
 * @returns {string|undefined} The parameter value if found, otherwise undefined.
 *
 * @example
 * // For URL https://example.com/?auction=123
 * // getQueryParameter('auction') -> '123'
 *
 */
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
