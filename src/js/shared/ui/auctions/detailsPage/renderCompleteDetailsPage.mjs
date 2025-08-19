import { createAuctionListingBidHistory } from "./createAuctionListingBidHistory.mjs";
import { createAuctionListingDetails } from "./createAuctionListingDetails.mjs";

export const renderCompleteDetailsPage = (auctionData, containerID) => {
  containerID.innerHTML = "";
  const bidHistoryContainer = document.querySelector("#bid-history");

  bidHistoryContainer.innerHTML = "";

  const createDetailContainers = createAuctionListingDetails(auctionData);
  containerID.appendChild(createDetailContainers);

  const bidHistoryComponent = createAuctionListingBidHistory(auctionData);
  bidHistoryContainer.appendChild(bidHistoryComponent);
};
