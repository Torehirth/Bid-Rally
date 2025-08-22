import {
  closeMenuButton,
  mobileMenu,
  openMenuButton,
} from "../../constants.mjs";

export const closeMobileMenu = () => {
  mobileMenu.classList.add("hidden", "lg:hidden");

  closeMenuButton.classList.remove("hidden");
  openMenuButton.classList.remove("hidden");
};
