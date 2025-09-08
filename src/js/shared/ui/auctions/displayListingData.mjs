/**
 * Insert listing data into a DOM element by setting its textContent.
 *
 *  If `container` is not a string the function returns immediately
 *
 * @param {string|number} data - The text or numeric value to display. Non-string values will be coerced to string.
 * @param {string} container - A CSS selector identifying the target element (passed to document.querySelector).
 *
 * @example
 * // Set the number count of listings
 * displayListingData(listings.length, '#listing');
 */
export const displayListingData = (data, container) => {
  if (typeof container !== "string") {
    return;
  }
  const listingData = data;
  const element = document.querySelector(container);
  element.innerHTML = "";
  element.textContent = listingData;
};
