/**
 * Updates the breadcrumbs last name to the item title.
 *
 * @param {string} listingTitle
 *
 * @example
 * updateBreadcrumbs(dataObject.title)
 */

export const updateBreadcrumbs = (listingTitle) => {
  const titleEl = document.querySelector("#item-title");
  if (titleEl && typeof listingTitle === "string") {
    titleEl.textContent = listingTitle;
  }
};
