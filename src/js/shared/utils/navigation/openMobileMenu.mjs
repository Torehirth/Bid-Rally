import { closeMenuButton, mobileMenu, openMenuButton } from "../../constants.mjs";

/**
 * Opens the mobile menu by removing opacity and pointer-events-none classes,
 * adding translate-y-0 and max-h-[400px] classes for animation,
 * and toggling the visibility of menu buttons.
 *
 * @function openMobileMenu
 * @description Handles the mobile menu opening animation and button state changes
 */
export const openMobileMenu = () => {
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  mobileMenu.classList.add("translate-y-0", "max-h-[400px]");
  closeMenuButton.classList.remove("hidden");
  openMenuButton.classList.add("hidden");
};
