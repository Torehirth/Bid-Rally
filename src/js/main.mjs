import { initHomePage } from "../js/pages/home.mjs";
import { initLoginPage } from "../js/pages/login.mjs";
import { initRegisterPage } from "../js/pages/register.mjs";
import { initProfilePage } from "../js/pages/profile.mjs";
import { initAuctionsPage } from "../js/pages/auctions.mjs";
import { initItemDetailPage } from "../js/pages/itemDetail.mjs";
import { initNewListingPage } from "../js/pages/newListing.mjs";
import { initAboutPage } from "../js/pages/about.mjs";
import { initContactPage } from "../js/pages/contact.mjs";

const router = () => {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
      initHomePage();
      break;

    case "/login/":
      initLoginPage();
      break;

    case "/register/":
      initRegisterPage();
      break;

    case "/profile/":
      initProfilePage();
      break;

    case "/auctions/":
      initAuctionsPage();
      break;

    case "/auctions/item.html":
      initItemDetailPage();
      break;

    case "/new-listing/":
      initNewListingPage();
      break;

    case "/about/":
      initAboutPage();
      break;

    case "/contact/":
      initContactPage();
      break;
  }
};

router();
