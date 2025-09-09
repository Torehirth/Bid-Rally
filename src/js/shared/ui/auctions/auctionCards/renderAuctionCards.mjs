import { getHighestBid } from "../../../utils/auctions/getHighestBid.mjs";
import { updateCountDown } from "../../../utils/auctions/updateCountDown.mjs";
import { createAuctionCard } from "./createAuctionCard.mjs";

/**
 * Renders auction cards into a specified container.
 *
 * @param {Array} allAuctions - An array of auction objects to be rendered.
 * @param {string} containerID - The ID of the container where the auction cards will be appended.
 * @param {string} pathname - The endpoint used to generate and navigate links for each auction item.
 *
 * @typedef {Object} Auction
 * @property {string} id - The unique identifier for the auction.
 * @property {string} [title] - The title of the auction. Defaults to "Untitled Auction" if not provided.
 * @property {string} [description] - The description of the auction. Defaults to "No description available" if not provided.
 * @property {Array} [media] - An array of media objects associated with the auction.
 * @property {Object} [media[0]] - The first media object in the array.
 * @property {string} [media[0].url] - The URL of the media. Defaults to a placeholder image if not provided.
 * @property {string} [media[0].alt] - The alt text for the media. Defaults to "image of {title}" if not provided.
 * @property {string} endsAt - The end date and time of the auction.
 * @property {Object} [_count] - An object containing count-related data.
 * @property {number} [_count.bids] - The number of bids on the auction. Defaults to "0" if not provided.
 *
 * @callback updateCountDown
 * @param {string} endsAt - The end date and time of the auction.
 * @returns {Object} - An object containing countdown data.
 * @property {string} timeLeft - The time remaining until the auction ends.
 * @property {boolean} isUrgent - Whether the auction is ending soon.
 *
 * @callback getHighestBid
 * @param {Auction} auction - The auction object.
 * @returns {number} - The highest bid for the auction.
 *
 * @callback createAuctionCard
 * @param {string} title - The title of the auction.
 * @param {string} description - The description of the auction.
 * @param {string} mediaURL - The URL of the auction's media.
 * @param {string} mediaAltText - The alt text for the auction's media.
 * @param {string} timeLeft - The time remaining until the auction ends.
 * @param {number} currentBid - The highest bid for the auction.
 * @param {number} bidCount - The number of bids on the auction.
 * @param {string} containerID - The ID of the container where the auction card will be appended.
 * @param {string} itemLink - The URL link to the auction item.
 * @param {boolean} isUrgent - Whether the auction is ending soon.
 */
export const renderAuctionCards = (allAuctions, containerID, pathname) => {
  allAuctions.forEach((auction) => {
    const id = auction?.id;
    const title = auction?.title || "Untitled Auction";
    const description = auction?.description || "No description available";
    const mediaURL =
      auction?.media?.[0]?.url || "/Bid-Rally/public/assets/images/listing-placeholder.webp";
    const mediaAltText = auction?.media?.[0]?.alt || `image of ${title}`;
    const timeData = updateCountDown(auction?.endsAt);

    const currentBid = getHighestBid(auction);
    const bidCount = auction?._count?.bids || "0";
    const itemLink = `${pathname}?id=${id || "#"}`;

    createAuctionCard(
      title,
      description,
      mediaURL,
      mediaAltText,
      timeData.timeLeft,
      currentBid,
      bidCount,
      containerID,
      itemLink,
      timeData.isUrgent
    );
  });
};
