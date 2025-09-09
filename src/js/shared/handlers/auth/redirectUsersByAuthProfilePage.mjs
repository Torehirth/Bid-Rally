import { isLoggedIn } from "../../helper/auth/isLoggedIn.mjs";
import { navigateTo } from "../../helper/navigateTo.mjs";
import { getFromStorage } from "../../utils/common/getFromStorage.mjs";

/**
 * Redirects user if accidentally landing on profile page while not logged in and no "user" in storage.
 *
 * - Creates an empty user object if no user is found.
 * - Then when checking boolean value of loggedIn, if false redirects to login page.
 */

export const redirectUsersByAuthProfilePage = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let user = getFromStorage("user");
    if (!user) {
      user = {};
    }
    const loggedIn = isLoggedIn();

    if (!loggedIn) {
      navigateTo("../login/");
    }
  });
};
