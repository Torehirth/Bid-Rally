import { isLoggedIn } from "../../helper/auth/isLoggedIn.mjs";
import { createLoggedInUserNav } from "./createLoggedInUserNav.mjs";
import { createLoggedOutUserNav } from "./createLoggedOutUserNav.mjs";

/**
 * Renders user-specific navigation buttons in the navigation menu.
 *
 * This function dynamically determines whether the user is logged in or not
 * and appends the appropriate navigation buttons to the `#user-menu` container.
 *
 * Dependencies:
 * - `createLoggedInUserNav`: Function that creates the navigation elements for a logged-in user.
 * - `createLoggedOutUserNav`: Function that creates the navigation elements for a logged-out user.
 * - `isLoggedIn`: Function that checks if the user is currently logged in.
 *
 * @function
 */
export const renderUserButtonsInNav = (loginLink, registerLink, profileLink) => {
  const outerContainer = document.querySelector("#user-menu");

  const loggedInUserNav = createLoggedInUserNav(profileLink);
  const loggedOutUserNav = createLoggedOutUserNav(loginLink, registerLink);

  const loggedIn = isLoggedIn();

  loggedIn
    ? outerContainer.appendChild(loggedInUserNav)
    : outerContainer.appendChild(loggedOutUserNav);
};
