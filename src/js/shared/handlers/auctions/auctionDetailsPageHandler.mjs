import { fetchAPI } from "../../api/fetchAPI.mjs";
import { renderCompleteDetailsPage } from "../../ui/auctions/detailsPage/renderCompleteDetailsPage.mjs";
import { getQueryParameter } from "../../utils/getQueryParameter.mjs";

export const auctionDetailsPageHandler = async () => {
  const container = document.querySelector("#item-details-section");
  const auctionId = getQueryParameter("id");

  if (!auctionId) {
    window.location.href = "../";
  }

  const endpoint = `listings/${auctionId}`;
  const queryParam = `_active=true&_seller=true&_bids=true&limit=10`;

  try {
    const json = await fetchAPI(container, endpoint, queryParam);
    const singleAuctionData = json?.data || {};

    if (!singleAuctionData) {
      window.location.href = "../auctions";
    }

    renderCompleteDetailsPage(singleAuctionData, container);
  } catch (err) {
    container.innerHTML = "Could not retrieve the item, try again later..";
    console.error(err);
  }
};
