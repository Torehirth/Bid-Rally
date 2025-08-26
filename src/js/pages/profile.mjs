import { fetchAPI } from "../shared/api/fetchAPI.mjs";
import { fetchUser } from "../shared/api/profile/fetchUser.mjs";
import { handleUserUIUpdates } from "../shared/handlers/user/handleUserUIUpdates.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { renderAuctionCards } from "../shared/ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayMessage } from "../shared/utils/common/displayMessage.mjs";
import { getFromStorage } from "../shared/utils/common/getFromStorage.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initProfilePage = () => {
  toggleMobileNav();
  fetchUser();
  handleUserUIUpdates();
  updateCopyright();
  handleUsersAuctionCards();
  console.log("init profile page");
};

// fetch user listings
export const fetchUserListings = async (container) => {
  try {
    const { name } = getFromStorage("user");
    if (!name) return;
    const data = await fetchAPI(
      container,
      `auction/profiles/${name}/listings`,
      "_active=true&_seller=true&_bids=true&limit=10"
    );

    if (!data) {
      throw new Error("Something wrong with the response");
    }
    const listings = data?.data;

    return listings;
  } catch (err) {
    displayMessage(
      container,
      "error",
      err.message || "Something went wrong fetching the users listings"
    );
    console.error(err.message);
  }
};

// NEED TO FINISH WHEN LISTINGS ARE MADE!!!!!!!

// display listings with the same cards as the rest of the site
const handleUsersAuctionCards = async () => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const listings = await fetchUserListings(listingsContainer);

  console.log(listings);

  // renderAuctionCards(listingsContainer, listings);
};

// ---------------------------------------------------------------------------------------------

// Create listing
// validate form
// create POST request
// submit listing
