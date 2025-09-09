import { fetchAPI } from "../../api/fetchAPI.mjs";
import { renderCompleteDetailsPage } from "../../ui/auctions/detailsPage/renderCompleteDetailsPage.mjs";
import { updateBreadcrumbs } from "../../ui/auctions/detailsPage/updateBreadcrumbs.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getQueryParameter } from "../../utils/common/getQueryParameter.mjs";
import { handleHTMLHeadUpdates } from "./handleHTMLHeadUpdates.mjs";

/**
 * Asynchronously handles the auction details page lifecycle.
 *
 * Behavior:
 * - Selects the main container element (#item-details-section).
 * - Reads the "id" query parameter from the URL.
 * - Redirects to the auctions listing when the id is missing or when fetched data is empty.
 * - Fetches auction details from `auction/listings/:id` with query params `_active=true&_seller=true&_bids=true&limit=10`.
 * - Updates HTML head metadata, the breadcrumbs title and renders the complete details page into the container.
 * - On failure, displays an error message in the container and logs the error.
 *
 * Side effects:
 * - May set `window.location.href` to perform redirects.
 * - Updates DOM via `handleHTMLHeadUpdates` and `renderCompleteDetailsPage`.
 * - Shows user-facing error messages via `displayMessage`.
 *
 * External dependencies:
 * - getQueryParameter
 * - fetchAPI
 * - handleHTMLHeadUpdates
 * - renderCompleteDetailsPage
 * - displayMessage
 *
 * @async
 * @function
 * @name auctionDetailsPageHandler
 * @returns {Promise<Object|undefined>} Resolves to the fetched single auction data object on success; resolves to undefined if an error occurs or a redirect takes place.
 * @throws {never} Errors are handled internally: this function will not propagate exceptions but will display an error message and log the error.
 * @example
 * // Initialize the auction details view (e.g., on page load)
 * await auctionDetailsPageHandler();
 */
export const auctionDetailsPageHandler = async () => {
  const container = document.querySelector("#item-details-section");
  const auctionId = getQueryParameter("id");

  if (!auctionId) {
    window.location.href = "../auctions/";
  }

  const endpoint = `auction/listings/${auctionId}`;
  const queryParam = `_active=true&_seller=true&_bids=true&limit=10`;

  try {
    const data = await fetchAPI(container, endpoint, queryParam);

    if (!data) {
      throw new Error("Data couldn't be fetched");
    }

    const singleAuctionData = data?.data;

    if (!singleAuctionData) {
      window.location.href = "../auctions";
    }
    updateBreadcrumbs(singleAuctionData?.title);
    handleHTMLHeadUpdates(singleAuctionData);
    renderCompleteDetailsPage(singleAuctionData, container);
    return singleAuctionData;
  } catch (err) {
    displayMessage(container, "error", "Could not display the item right now. Try again later..");
    console.error(err.message);
  }
};
