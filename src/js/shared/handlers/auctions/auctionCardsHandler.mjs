import { fetchAPI } from "../../api/fetchAPI.mjs";
import { renderLoadMoreButton } from "../../ui/auctions/auctionCards/renderLoadMoreButton.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";

/**
 * Fetches active auction listings and renders them into the page.
 *
 * - Selects the DOM container with id "auctions-grid".
 * - Calls fetchAPI to request active auction listings with seller and bids included, limited to 10.
 * - If data is returned, calls renderAuctionCards with the returned listings and the container, then calls renderLoadMoreButton.
 * - If fetching fails or returns falsy data, displays an error message inside the container and logs the error.
 *
 * @async
 * @function auctionCardsHandler
 * @returns {Promise<void>} Resolves when rendering completes or after error handling.
 *
 * @throws {Error} If fetched data is falsy or if fetchAPI fails, an error is thrown and handled within the function.
 *
 * @example
 * // Typical usage (e.g., on page load)
 * await auctionCardsHandler();
 */
export const auctionCardsHandler = async () => {
  const container = document.querySelector("#auctions-grid");

  try {
    const data = await fetchAPI(
      container,
      "auction/listings",
      "_active=true&_seller=true&_bids=true&limit=10"
    );

    if (!data) {
      throw new Error("Data couldn't be fetched");
    }

    const allAuctions = data?.data;

    renderAuctionCards(allAuctions, container);
    renderLoadMoreButton();
  } catch (err) {
    displayMessage(
      container,
      "error",
      "Could not get the auction listings at the moment. Try again later.."
    );
    console.error(err.message);
  }
};
