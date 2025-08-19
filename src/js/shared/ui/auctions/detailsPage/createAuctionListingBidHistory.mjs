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
  totalBids.className = "text-sm text-black";
  const count = bids.length;
  totalBids.textContent = `${count} ${count === 1 ? "bid" : "bids"} placed`;

  headerContent.appendChild(totalBids);
  header.appendChild(headerContent);

  // Where each bid row will go
  const bidList = document.createElement("div");
  bidList.id = "bid-list";
  bidList.className = "divide-gray/30 divide-y";

  // A simple "no bids yet" view (hidden by default)
  const emptyState = createEmptyBidsHistory();

  // If we have bids, sort and render them. If not, show the empty state.
  if (count > 0) {
    renderBidsHistory(bids, bidList); // this will sort highest → lowest and then add rows
    emptyState.classList.add("hidden");
    bidList.classList.remove("hidden");
  } else {
    emptyState.classList.remove("hidden");
    bidList.classList.add("hidden");
  }

  // Put everything together
  wrapper.appendChild(header);
  wrapper.appendChild(bidList);
  wrapper.appendChild(emptyState);

  container.appendChild(heading);
  container.appendChild(wrapper);

  return container;
}
