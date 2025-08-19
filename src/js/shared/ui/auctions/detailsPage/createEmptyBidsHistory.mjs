/**
 * Display simple "no bids" text.
 */
export const createEmptyBidsHistory = () => {
  const emptyState = document.createElement("div");
  emptyState.id = "no-bids";
  emptyState.className = "hidden px-6 py-8 text-center";

  const text = document.createElement("p");
  text.className = "text-black/80";
  text.textContent = "No bids have been placed yet.";

  emptyState.appendChild(text);

  return emptyState;
};
