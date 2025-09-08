import { createAuctionListingBidHistory } from "./createAuctionListingBidHistory.mjs";
import { createAuctionListingDetails } from "./createAuctionListingDetails.mjs";

/**
 * Render the complete auction details page into a given container.
 *
 * This function clears the provided container element and the document element
 * with id "bid-history", then creates and appends the auction details component
 * and the bid history component using the module's helper creators
 * (createAuctionListingDetails and createAuctionListingBidHistory).
 *
 * @param {Object} auctionData - The auction data object containing listing details and bid history.
 * @param {Element} containerID - The DOM element to render the auction details into (will be cleared).
 * @returns {void}
 * @throws {TypeError} If an element with id "bid-history" is not found in the document.
 *
 * @example
 * // Given an auction data object and a container element:
 * // renderCompleteDetailsPage(auctionData, document.querySelector('#details-container'));
 */
export const renderCompleteDetailsPage = (auctionData, containerID) => {
  containerID.innerHTML = "";
  const bidHistoryContainer = document.querySelector("#bid-history");

  bidHistoryContainer.innerHTML = "";

  const createDetailContainers = createAuctionListingDetails(auctionData);
  containerID.appendChild(createDetailContainers);

  const bidHistoryComponent = createAuctionListingBidHistory(auctionData);
  bidHistoryContainer.appendChild(bidHistoryComponent);
};
