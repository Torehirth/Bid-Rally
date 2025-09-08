/**
 * Initializes a click listener that opens the avatar modal.
 *
 * - Attaches a click event listener to document.
 * - Directly mutates DOM classes of the "#avatar-modal" element.
 *
 * @function openModalListener
 */
export const openModalListener = () => {
  const modal = document.querySelector("#avatar-modal");

  document.addEventListener("click", (e) => {
    if (e.target.closest("#edit-avatar-btn")) {
      modal.classList.remove("hidden");
    }
  });
};
