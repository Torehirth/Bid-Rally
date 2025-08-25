import { closeMenuButton, mobileMenu, openMenuButton } from "../../constants.mjs";

export const closeMobileMenu = () => {
  mobileMenu.classList.add("-translate-y-0", "opacity-0", "pointer-events-none");
  mobileMenu.classList.remove("translate-y-0");

  closeMenuButton.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
};
