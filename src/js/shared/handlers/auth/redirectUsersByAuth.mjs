import { isLoggedIn } from "../../helper/auth/isLoggedIn.mjs";
import { navigateTo } from "../../helper/navigateTo.mjs";
import { getFromStorage } from "../../utils/common/getFromStorage.mjs";

/**
 * Attach a DOMContentLoaded listener that redirects users to the login page if they are not authenticated.
 *
 * If "user" is not stored in local storage, return early to avoid navigating to the same page over and over.
 *
 * If the user is logged in and accidentally visits login or register page, they are automatically returned to the home page.
 *
 * On DOMContentLoaded the function calls isLoggedIn(). If isLoggedIn() returns a falsy value,
 * it performs a client-side navigation to "../login/" via navigateTo(...).
 *
 * @function redirectUsersNotLoggedIn
 * @returns {void}
 * @see isLoggedIn
 * @see navigateTo
 * @example
 * // Typically invoked during module initialization:
 * redirectUsersNotLoggedIn();
 */
export const redirectUsersByAuth = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let user = getFromStorage("user");
    if (!user) return;
    const loggedIn = isLoggedIn();

    if (!loggedIn) {
      navigateTo("../login/");
    } else if (
      window.location.pathname === "/Bid-Rally/login/" ||
      window.location.pathname === "/Bid-Rally/register/"
    ) {
      navigateTo("../");
    }
  });
};
