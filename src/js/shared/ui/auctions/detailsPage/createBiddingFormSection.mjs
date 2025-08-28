import { createBidForm } from "./createBidForm.mjs";

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

  // Message container
  const messageContainer = document.createElement("div");
  messageContainer.id = "message";

  // Bidding form
  const bidForm = createBidForm(auctionData);

  // Login required message

  biddingContainer.appendChild(biddingTitle);
  biddingContainer.appendChild(messageContainer);
  biddingContainer.appendChild(bidForm);

  return biddingContainer;
};
