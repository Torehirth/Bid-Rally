import { getHighestBid } from "../../../utils/auctions/getHighestBid.mjs";
import { updateCountDown } from "../../../utils/auctions/updateCountDown.mjs";
import { createAuctionCard } from "./createAuctionCard.mjs";

/**
 * Renders auction cards for a collection of auctions by clearing the container and creating individual auction cards
 * @param {Array<Object>} allAuctions - Array of auction objects containing auction data
 * @param {HTMLElement} containerID - The DOM element container where auction cards will be rendered
 * @param {string} allAuctions[].id - Unique identifier for the auction
 * @param {string} [allAuctions[].title] - Title of the auction item
 * @param {string} [allAuctions[].description] - Description of the auction item
 * @param {Array<Object>} [allAuctions[].media] - Array of media objects for the auction
 * @param {string} [allAuctions[].media[].url] - URL of the media file
 * @param {string} [allAuctions[].media[].alt] - Alt text for the media
 * @param {string} allAuctions[].endsAt - ISO string representing when the auction ends
 * @param {Object} [allAuctions[]._count] - Object containing count data
 * @param {number} [allAuctions[]._count.bids] - Number of bids placed on the auction
 * @returns {void}
 */
export const renderAuctionCards = (allAuctions, containerID) => {
  containerID.innerHTML = "";
  allAuctions.forEach((auction) => {
    const id = auction?.id;
    const title = auction?.title || "Untitled Auction";
    const description = auction?.description || "No description available";
    const mediaURL =
      auction?.media?.[0]?.url ||
      "/Bid-Rally/public/assets/images/listing-placeholder.webp";
    const mediaAltText = auction?.media?.[0]?.alt || `image of ${title}`;
    const timeData = updateCountDown(auction?.endsAt);

    const currentBid = getHighestBid(auction);
    const bidCount = auction?._count?.bids || "0";
    const itemLink = `../auctions/item.html?id=${id || "#"}`;

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
