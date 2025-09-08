/**
 * Update the "content" attribute of a <meta> element that matches a given attribute/property pair.
 *
 * Finds a <meta> element where the specified attribute equals the specified property and, if found,
 * sets its "content" attribute to the provided value. If no matching element is found, the function
 * performs no action.
 *
 * @param {string} attribute - The meta attribute name to match (e.g., "name", "property", "http-equiv").
 * @param {string} property - The expected value of the attribute used to identify the meta element.
 * @param {string} value - The value to assign to the meta element's "content" attribute.
 *
 * @example
 * // Set the og:title meta tag content
 * updateMetaPropertyValues('property', 'og:title', 'Fancy clock || BidRally');
 */
export const updateMetaPropertyValues = (attribute, property, value) => {
  const element = document.querySelector(`meta[${attribute}="${property}"]`);
  if (element && typeof value === "string") {
    element.setAttribute("content", value);
  }
};
