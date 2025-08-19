import { createBidForm } from "./createBidForm.mjs";
import { createLoginMessage } from "./createLoginMessage.mjs";

/**
 * Creates the bidding form section in the details page
 */
export const createBiddingFormSection = (auctionData) => {
  // Main bidding container
  const biddingContainer = document.createElement("div");
  biddingContainer.className = "border-gray/50 rounded-lg border bg-white p-6";

  // Bidding title
  const biddingTitle = document.createElement("h2");
  biddingTitle.className = "mb-4 text-xl font-semibold";
  biddingTitle.textContent = "Place Your Bid";

  // Bidding form
  const bidForm = createBidForm(auctionData);

  // Login required message
  const loginMessage = createLoginMessage();

  biddingContainer.appendChild(biddingTitle);
  biddingContainer.appendChild(bidForm);
  biddingContainer.appendChild(loginMessage);

  return biddingContainer;
};
