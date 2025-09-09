import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { initAuctionPagination } from "../shared/listeners/auctions/initAuctionPagination.mjs";
import { searchInputListener } from "../shared/listeners/auctions/searchInputListener.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";

export const initAuctionsPage = async () => {
  toggleMobileNav();
  updateCopyright();
  initAuctionPagination();
  searchInputListener();
  initAuthStates();
  console.log("init Auctions page");
};
