import { isLoggedIn } from "../../../helper/auth/isLoggedIn.mjs";
import { createEmptyBidsHistory } from "./createEmptyBidsHistory.mjs";
import { renderBidsHistory } from "./renderBidsHistory.mjs";

/**
 * Builds the whole "Bid History" section.
 * @param {Object} auctionData - Object from the API. Should have a "bids" array.
 * @returns {HTMLElement}
 */
export function createAuctionListingBidHistory(auctionData = { bids: [] }) {
  // Make sure we always have an array to work with
  const bids = Array.isArray(auctionData.bids) ? auctionData.bids : [];

  // Main outer container
  const container = document.createElement("div");
  container.className = "container mx-auto px-4";

  // Section heading
  const heading = document.createElement("h2");
  heading.id = "bid-history-heading";
  heading.className = "mb-6 text-2xl font-semibold";
  heading.textContent = "Bid History";

  // Card wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "border-gray/50 overflow-hidden rounded-lg border";

  // Header with count
  const header = document.createElement("div");
  header.className = "border-gray/30 border-b px-6 py-4";

  const headerContent = document.createElement("div");
  headerContent.className = "flex items-center justify-between";

  const totalBids = document.createElement("p");
  totalBids.id = "total-bids";
  totalBids.className = "text-sm";
  const count = bids.length;
  totalBids.textContent = `${count} ${count === 1 ? "bid" : "bids"} placed`;

  headerContent.appendChild(totalBids);
  header.appendChild(headerContent);

  // Where each bid row will go
  const bidList = document.createElement("div");
  bidList.id = "bid-list";
  bidList.className = "divide-gray/30 divide-y";

  // If not logged in
  const loggedIn = isLoggedIn();
  const loginLink = document.createElement("a");
  loginLink.href = "../login/";
  loginLink.textContent = "here";
  loginLink.classList.add(
    "text-dark-green",
    "hover:text-gray",
    "font-medium",
    "underline",
    "transition-colors"
  );
  loginLink.setAttribute("aria-label", "Click here to login and see the bid history");

  const notLoggedInInfoText = document.createElement("p");
  notLoggedInInfoText.classList.add("text-md", "text-center", "py-4");

  notLoggedInInfoText.append("Click ");
  notLoggedInInfoText.appendChild(loginLink);
  notLoggedInInfoText.append(" to log in and see the bid history");

  // A simple "no bids" message (hidden by default)
  const emptyState = createEmptyBidsHistory();

  // If we have bids, sort and render them. If not, show the empty state.
  if (count > 0 || !loggedIn) {
    renderBidsHistory(bids, bidList);
    emptyState.classList.add("hidden");
    bidList.classList.remove("hidden");
  } else {
    emptyState.classList.remove("hidden");
    bidList.classList.add("hidden");
  }

  wrapper.appendChild(header);

  if (loggedIn) {
    wrapper.appendChild(bidList);
  } else {
    wrapper.appendChild(notLoggedInInfoText);
  }

  wrapper.appendChild(emptyState);
  container.appendChild(heading);
  container.appendChild(wrapper);

  return container;
}
