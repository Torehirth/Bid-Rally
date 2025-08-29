/**
 * Validates if a given URL points to a valid image resource.
 *
 * @param {string|URL} URL - The URL to validate as an image URL
 * @returns {boolean} Returns true if the URL is a valid image URL with supported formats (jpeg, jpg, png, gif, bmp, webp, svg), false otherwise
 *
 * @example
 * // Returns true
 * isImageUrlValid('https://example.com/image.jpg');
 *
 * @example
 * // Returns false
 * isImageUrlValid('https://example.com/document.pdf');
 *
 * @example
 * // Returns true with query parameters
 * isImageUrlValid('https://example.com/image.png?width=300&height=200');
 */
export const isImageUrlValid = (URL) => {
  const imageRegEx =
    /^https?:\/\/[^\s?#]+\.(?:jpe?g|png|gif|bmp|webp|svg)(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
  return imageRegEx.test(URL.toString().toLowerCase().trim());
};
