import { fetchAPI } from "../../api/fetchAPI.mjs";
import { renderCompleteDetailsPage } from "../../ui/auctions/detailsPage/renderCompleteDetailsPage.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getQueryParameter } from "../../utils/common/getQueryParameter.mjs";

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

    renderCompleteDetailsPage(singleAuctionData, container);
    return singleAuctionData;
  } catch (err) {
    displayMessage(container, "error", "Could not display the item right now. Try again later..");
    console.error(err.message);
  }
};
