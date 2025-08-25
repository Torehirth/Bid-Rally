import { closeMenuButton, mobileMenu, openMenuButton } from "../../constants.mjs";

export const openMobileMenu = () => {
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  mobileMenu.classList.add("translate-y-0", "max-h-[400px]");
  closeMenuButton.classList.remove("hidden");
  openMenuButton.classList.add("hidden");
};
