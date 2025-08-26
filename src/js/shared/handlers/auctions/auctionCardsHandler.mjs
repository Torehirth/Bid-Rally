import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";
import { fetchAPI } from "../../api/fetchAPI.mjs";
import { renderLoadMoreButton } from "../../ui/auctions/auctionCards/renderLoadMoreButton.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";

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
    console.log(allAuctions);

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
