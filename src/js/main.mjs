import { initHomePage } from "../js/pages/home.mjs";
import { initLoginPage } from "../js/pages/login.mjs";
import { initRegisterPage } from "../js/pages/register.mjs";
import { initProfilePage } from "../js/pages/profile.mjs";
import { initAuctionsPage } from "../js/pages/auctions.mjs";
import { initAuctionDetailsPage } from "../js/pages/auctionDetails.mjs";
import { initNewListingPage } from "../js/pages/newListing.mjs";
import { initAboutPage } from "../js/pages/about.mjs";
import { initContactPage } from "../js/pages/contact.mjs";

const router = () => {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/Bid-Rally/":
      initHomePage();
      break;

    case "/Bid-Rally/login/":
      initLoginPage();
      break;

    case "/Bid-Rally/register/":
      initRegisterPage();
      break;

    case "/Bid-Rally/profile/":
      initProfilePage();
      break;

    case "/Bid-Rally/auctions/":
      initAuctionsPage();
      break;

    case "/Bid-Rally/auctions/item.html":
      initAuctionDetailsPage();
      break;

    case "/Bid-Rally/new-listing/":
      initNewListingPage();
      break;

    case "/Bid-Rally/about/":
      initAboutPage();
      break;

    case "/Bid-Rally/contact/":
      initContactPage();
      break;
  }
};

router();
