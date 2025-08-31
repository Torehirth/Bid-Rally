import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { initAuctionPagination } from "../shared/listeners/auctions/initAuctionPagination.mjs";
import { displayMessage } from "../shared/utils/common/displayMessage.mjs";
import { renderAuctionCards } from "../shared/ui/auctions/auctionCards/renderAuctionCards.mjs";
import { fetchAuctionListings } from "../shared/api/auctions/fetchAuctionListings.mjs";

export const initAuctionsPage = async () => {
  toggleMobileNav();
  updateCopyright();
  initAuctionPagination();
  console.log("init Auctions page");
};

// get input value
// trim and set value to lowerCase
// filter value against titles or description
// Or use this endpoint: /auction/listings/search?q=<query>

const auctionGrid = document.querySelector("#auctions-grid");

export const searchListing = async () => {
  try {
    console.log(URL);
    const data = await fetchAuctionListings();

    const listings = data;

    console.log(listings);

    return listings;
  } catch (err) {
    console.error(err.message);
    displayMessage("#message", "error", "Could not find the listings at the moment");
  }
};

export const searchInputListener = () => {
  const searchContainer = document.querySelector("#search-input");
  searchContainer.addEventListener("input", async () => {
    const searchValue = searchContainer.value.trim().toLowerCase().replace(/ /g, "");
    const listings = await searchListing();
    console.log(listings);

    if (searchValue) {
      auctionGrid.innerHTML = "";

      renderAuctionCards(listings, auctionGrid);
    } else {
      renderAuctionCards(listings, auctionGrid);
    }
  });
};

// searchInputListener();
