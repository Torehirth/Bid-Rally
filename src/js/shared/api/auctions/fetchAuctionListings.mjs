import { fetchAPI } from "../fetchAPI.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { displayListingData } from "../../ui/auctions/displayListingData.mjs";

export const fetchAuctionListings = async (
  limit = 15,
  page = 1,
  sort = "endsAt",
  sortOrder = "asc"
) => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const endpoint = "auction/listings";
  const queryParam = `_active=true&_seller=true&_bids=true&sort=${sort}&sortOrder=${sortOrder}&limit=${limit}&page=${page}`;

  try {
    const data = await fetchAPI(listingsContainer, endpoint, queryParam);

    if (!data) {
      throw new Error("Data couldn't be fetched");
    }

    // Updates visual number of listings count
    const currentLengthOfListings = data?.meta?.isLastPage
      ? data?.meta?.totalCount
      : data?.data?.length * page;

    displayListingData(currentLengthOfListings, "#current-listings-number");
    displayListingData(data.meta.totalCount, "#total-listings");

    const listings = data?.data || [];
    return listings;
  } catch (err) {
    displayMessage(
      "#message",
      "error",
      "Could not get the auction listings at the moment. Try again later.."
    );
    console.error(err.message);
  }
};
