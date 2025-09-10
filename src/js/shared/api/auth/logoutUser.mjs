import { navigateTo } from "../../helper/navigateTo.mjs";
import { removeFromLocalStorage } from "../../helper/removeFromLocalStorage.mjs";

/**
 * Sets up a click event listener to handle user logout functionality.
 * When the logout button is clicked, removes user data from local storage
 * and navigates to the login page.
 *
 * @function logoutUser
 * @returns {void}
 *
 * @example
 * // Initialize logout functionality
 * logoutUser();
 *
 * @description
 * This function adds a document-level click event listener that:
 * - Listens for clicks on elements with ID "logout-btn"
 * - Removes "user" key from localStorage when logout button is clicked
 * - Navigates to "../login/" path after logout
 * - Returns early if clicked element is not the logout button
 */
export const logoutUser = () => {
  console.log(window.location.pathname);

  document.addEventListener("click", (e) => {
    if (e.target.closest("#logout-btn")) {
      removeFromLocalStorage("user");
      navigateTo("./Bid-Rally/");
    } else return;
  });
};
