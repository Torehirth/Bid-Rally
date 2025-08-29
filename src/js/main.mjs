import { initHomePage } from "../js/pages/home.mjs";
import { initLoginPage } from "../js/pages/login.mjs";
import { initRegisterPage } from "../js/pages/register.mjs";
import { initProfilePage } from "../js/pages/profile.mjs";
import { initAuctionsPage } from "../js/pages/auctions.mjs";
import { initAuctionDetailsPage } from "../js/pages/auctionDetails.mjs";
import { initNewListingPage } from "../js/pages/newListing.mjs";
import { initAboutPage } from "../js/pages/about.mjs";
import { initContactPage } from "../js/pages/contact.mjs";

/**
 * Router for the single-page application that dispatches based on the current
 * window.location.pathname and invokes the corresponding page initialization
 * function.
 *
 * Behavior:
 * - Reads window.location.pathname and performs exact, case-sensitive matching
 *   against known application routes.
 * - When a match is found, calls the corresponding global initializer:
 *   - "/Bid-Rally/"              => initHomePage()
 *   - "/Bid-Rally/login/"        => initLoginPage()
 *   - "/Bid-Rally/register/"     => initRegisterPage()
 *   - "/Bid-Rally/profile/"      => initProfilePage()
 *   - "/Bid-Rally/auctions/"     => initAuctionsPage()
 *   - "/Bid-Rally/auctions/item.html" => initAuctionDetailsPage()
 *   - "/Bid-Rally/new-listing/"  => initNewListingPage()
 *   - "/Bid-Rally/about/"        => initAboutPage()
 *   - "/Bid-Rally/contact/"      => initContactPage()
 *
 * @function router
 * @returns {void} Does not return a value; side effects are calling init functions.
 */
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
