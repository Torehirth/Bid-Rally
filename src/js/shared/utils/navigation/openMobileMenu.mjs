import {
  closeMenuButton,
  mobileMenu,
  openMenuButton,
} from "../../constants.mjs";

export const openMobileMenu = () => {
  mobileMenu.classList.remove("hidden", "lg:hidden");

  closeMenuButton.classList.remove("hidden");
  openMenuButton.classList.add("hidden");
};
