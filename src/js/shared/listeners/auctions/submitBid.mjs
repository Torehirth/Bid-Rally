import { handleBiddingForm } from "../../handlers/auctions/handleBiddingForm.mjs";

/**
 * Register a delegated submit event listener that handles bid form submissions.
 *
 * Adds a single `"submit"` listener on `document`. When the event's target element
 * has an id of `"bid-form"`, the default form submission is prevented and the
 * submission is forwarded to `handleBiddingForm("#message", event)`.
 *
 * Intended to be called once during app initialization to enable client-side
 * bidding behavior.
 *
 * Notes:
 * - Depends on `handleBiddingForm` being available in scope.
 * - Uses event delegation so the actual form element may be added to the DOM later.
 *
 * @export
 * @function submitBid
 * @returns {void}
 * @see {@link handleBiddingForm}
 */
export const submitBid = () => {
  document.addEventListener("submit", (e) => {
    if (e.target.id === "bid-form") {
      e.preventDefault();
      handleBiddingForm("#message", e);
    }
  });
};
