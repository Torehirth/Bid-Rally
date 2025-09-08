/**
 * Determines whether a listing matches a search term.
 *
 * The function performs a case-insensitive, trimmed substring search against the
 * listing's title, description, and tags. If `searchTerm` is falsy (e.g. `""`,
 * `null`, `undefined`), the function returns `true` to indicate the listing
 * should be included (no filtering).
 *
 * @param {string|number|null|undefined} searchTerm - The term to search for. It
 *   will be coerced to a trimmed, lowercased string before matching.
 * @param {Object} listing - The listing object to test.
 * @param {string} [listing.title] - The listing title (optional).
 * @param {string} [listing.description] - The listing description (optional).
 * @param {Array<*>} [listing.tags] - Array of tags associated with the listing.
 *   Each tag will be converted to a string for matching.
 * @returns {boolean} True if the listing's title, description, or any tag
 *   contains the search term (case-insensitive); or true if `searchTerm` is falsy.
 *
 * @example
 * // matches title
 * matchesSearch('bike', { title: 'Mountain Bike', description: '', tags: [] }); // => true
 *
 * @example
 * // matches description (case-insensitive, partial)
 * matchesSearch('chain', { title: '', description: 'Brand new chainset', tags: [] }); // => true
 *
 * @example
 * // matches tags (non-string tags are coerced to string)
 * matchesSearch('vintage', { title: '', description: '', tags: ['classic', 123, 'Vintage items'] }); // => true
 *
 * @example
 * // empty search term returns true (no filtering)
 * matchesSearch('', { title: 'Anything', description: '...', tags: [] }); // => true
 */
export const matchesSearch = (searchTerm, listing) => {
  if (!searchTerm) return true;

  const term = String(searchTerm || "")
    .trim()
    .toLowerCase();

  const title = listing?.title?.toLowerCase() || "";
  const description = listing?.description?.toLowerCase() || "";
  const tags = listing?.tags || [];

  const isInTitle = title.includes(term);
  const isInDescription = description.includes(term);
  const isInTags = tags.some((tag) => String(tag).toLowerCase().includes(term));

  return isInTitle || isInDescription || isInTags;
};
