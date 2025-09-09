import { isLoggedIn } from "../../../helper/auth/isLoggedIn.mjs";
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

  // If not logged in
  const loginTitle = document.createElement("h2");
  loginTitle.textContent = "Log in to place a bid";
  loginTitle.classList.add("mb-4", "text-xl", "font-semibold");

  const loginButton = document.createElement("a");
  loginButton.href = "../login/";
  loginButton.classList.add("btn-primary", "flex", "justify-center");
  loginButton.textContent = "Log In";
  loginButton.setAttribute("aria-label", "navigate to login page");

  const loggedIn = isLoggedIn();
  // If logged in
  if (loggedIn) {
    biddingContainer.appendChild(biddingTitle);
    biddingContainer.appendChild(messageContainer);
    biddingContainer.appendChild(bidForm);
  } else {
    biddingContainer.appendChild(loginTitle);
    biddingContainer.appendChild(loginButton);
  }

  return biddingContainer;
};
