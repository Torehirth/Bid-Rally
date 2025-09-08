import { updateMetaPropertyValues } from "../../helper/updateMetaPropertyValues.mjs";
import { updateMetaTitle } from "../../helper/updateMetaTitle.mjs";

/**
 * Update the document <head> metadata (title, description, keywords, Open Graph image/title/description)
 * based on a provided auction/item data object. Values are trimmed and sensible defaults are applied
 * when fields are missing or empty.
 *
 * - Calls updateMetaTitle(...) to set the document title.
 * - Calls updateMetaPropertyValues(...) to set meta tags (og:title, og:description, og:image, keywords, description).
 *
 * @param {Object} [data] - Source data used to populate head elements.
 * @param {string} [data.title] - Item title; trimmed and used as document title and og:title.
 *                                   Default: "Item for sale | BidRally".
 * @param {string} [data.description] - Item description; trimmed and used for meta description and og:description.
 *                                      Default: "We have a large selection of items ready for auction".
 * @param {string[]} [data.tags] - Array of tag strings; joined with ", " and used for the keywords meta tag.
 *                                  Default: "Auction, Listings, Vintage, Sale, Items, Good condition".
 * @param {Array<{url?: string}>} [data.media] - Array of media objects; the first element's `url` is used for og:image.
 *                                               Default: placeholder image URL.
 * @returns {void}
 *
 * @example
 * handleHTMLHeadUpdates({
 *   title: "Vintage Camera",
 *   description: "A well-preserved 1950s camera in working condition.",
 *   tags: ["vintage", "camera", "collectible"],
 *   media: [{ url: "https://example.com/camera.jpg" }]
 * });
 */
export const handleHTMLHeadUpdates = (data) => {
  const title = data?.title?.trim() || "Item for sale | BidRally";
  const description =
    data?.description?.trim() || "We have a large selection of items ready for auction";
  const keywords =
    data?.tags?.join(", ") || "Auction, Listings, Vintage, Sale, Items, Good condition";
  const media =
    data?.media?.[0]?.url ||
    "https://cdn.pixabay.com/photo/2017/07/23/17/43/isolated-2532037_1280.png";

  updateMetaTitle(title);
  updateMetaPropertyValues("property", "og:title", `${title}`);
  updateMetaPropertyValues("property", "og:description", `${description}`);
  updateMetaPropertyValues("property", "og:image", `${media}`);
  updateMetaPropertyValues("name", "keywords", `${keywords}`);
  updateMetaPropertyValues("name", "description", `${description}`);
};
