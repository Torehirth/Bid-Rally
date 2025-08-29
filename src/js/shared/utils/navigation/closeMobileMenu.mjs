import { closeMenuButton, mobileMenu, openMenuButton } from "../../constants.mjs";

/**
 * Closes the mobile navigation menu by applying CSS classes for hiding animation.
 *
 * This function hides the mobile menu by:
 * - Adding classes to translate the menu out of view and make it invisible
 * - Removing the visible translate class
 * - Hiding the close menu button and showing the open menu button
 *
 * @function closeMobileMenu
 * @returns {void}
 */
export const closeMobileMenu = () => {
  mobileMenu.classList.add("-translate-y-0", "opacity-0", "pointer-events-none");
  mobileMenu.classList.remove("translate-y-0");

  closeMenuButton.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
};
