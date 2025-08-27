import { fetchUserListings } from "../../api/profile/fetchUserListings.mjs";
import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";

export const handleUsersAuctionCards = async () => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const listings = await fetchUserListings(listingsContainer);

  renderAuctionCards(listings, listingsContainer);
};
