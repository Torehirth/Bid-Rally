import { closeMenuButton, openMenuButton } from "../constants.mjs";
import { closeMobileMenu } from "../utils/navigation/closeMobileMenu.mjs";
import { openMobileMenu } from "../utils/navigation/openMobileMenu.mjs";

export const toggleMobileNav = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#open-mobile-menu-button")) {
      openMobileMenu();
    } else if (!e.target.closest("#mobile-menu") || e.target.closest("#close-mobile-menu-button")) {
      closeMobileMenu();
      closeMenuButton.classList.add("hidden");
      openMenuButton.classList.remove("hidden");
    }
  });
};
