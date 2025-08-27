/**
 * Updates the copyright year element with the current year.
 * The querySelector is also incorrect - should use querySelector instead of createElement.
 *
 * @function updateCopyright
 * @returns {void}
 */
export const updateCopyright = () => {
  const year = new Date().getFullYear();
  document.querySelector("#copyright-year").textContent = year;
};
