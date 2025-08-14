import renderAuctionCards from "../shared/ui/auctions/renderAuctionCards.mjs";
import fetchAPI from "../shared/api/fetchAPI.mjs";

export const initAuctionsPage = async () => {
  console.log("init Auctions page");
  auctionCardsHandler();
};

const auctionCardsHandler = async () => {
  const container = document.querySelector("#auctions-grid");

  try {
    const json = await fetchAPI(
      container,
      "listings",
      "_active&_seller&_bids&limit=10"
    );

    const allAuctions = json?.data;
    renderAuctionCards(allAuctions, container);
  } catch (err) {
    container.innerHTML = err;
  }
};
