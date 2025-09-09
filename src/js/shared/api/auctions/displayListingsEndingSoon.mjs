import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { fetchAPI } from "../fetchAPI.mjs";

/**
 * Fetches and displays auction listings that are ending soon.
 *
 * @async
 * @function displayListingsEndingSoon
 * @param {string} [sort="endsAt"] - The field by which to sort the listings.
 * @param {string} [sortOrder="asc"] - The order in which to sort the listings ("asc" for ascending, "desc" for descending).
 * @param {number} [limit=4] - The maximum number of listings to fetch per page.
 * @param {number} [page=1] - The page number to fetch.
 * @returns {Promise<void>} - A promise that resolves when the listings are fetched and displayed.
 * @throws {Error} - Throws an error if the data cannot be fetched or displayed.
 */
export const displayListingsEndingSoon = async (
  sort = "endsAt",
  sortOrder = "asc",
  limit = 4,
  page = 1
) => {
  const listingsContainer = document.querySelector("#auctions-ending-soon-container");
  const endpoint = "auction/listings";
  const queryParam = `_active=true&_seller=true&_bids=true&sort=${sort}&sortOrder=${sortOrder}&limit=${limit}&page=${page}`;

  try {
    listingsContainer.innerHTML = "";
    const data = await fetchAPI(listingsContainer, endpoint, queryParam);
    const listings = data?.data || [];

    if (!data) {
      throw new Error("Data couldn't be fetched");
    }
    renderAuctionCards(listings, listingsContainer, "./auctions/item.html");
  } catch (err) {
    console.error(err.message);
    displayMessage(
      listingsContainer,
      "error",
      "Something went wrong displaying listings that ends soon"
    );
  }
};
