import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { fetchAPI } from "../fetchAPI.mjs";

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

    console.log(listings);

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
