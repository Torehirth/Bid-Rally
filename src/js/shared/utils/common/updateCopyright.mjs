/**
 * Updates the copyright year element with the current year.
 *
 * @function updateCopyright
 * @returns {void}
 */
export const updateCopyright = () => {
  const year = new Date().getFullYear();
  document.querySelector("#copyright-year").textContent = year;
};
