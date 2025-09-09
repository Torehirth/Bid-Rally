/**
 * Update the document's <title> element to include a listing title and the site name.
 *
 * When a <title> element is present in the document, this function sets its
 * textContent to: `${listingTitle} || BidRally`.
 *
 * @param {string} listingTitle - The listing-specific title to include before the site name.
 * @returns {void}
 *
 * @example
 * // Sets document title to "Vintage Clock || BidRally"
 * updateMetaTitle('Vintage Clock');
 */
export const updateMetaTitle = (listingTitle) => {
  const titleEl = document.querySelector("title");
  if (titleEl && typeof listingTitle === "string") {
    titleEl.textContent = `${listingTitle} | BidRally`;
  }
};
