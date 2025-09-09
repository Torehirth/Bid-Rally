/**
 * Initializes a click listener that closes the avatar modal.
 *
 * When any click occurs in the document, the listener checks whether the click
 * target (or one of its ancestors) matches either "#close-modal-btn" or
 * "#cancel-avatar-btn". If so, it hides the element with id "avatar-modal" by
 * adding the "hidden" CSS class.
 *
 * - Adds a click event listener on document.
 * - Adds the "hidden" class to the modal element when a matching target is clicked.
 * - Uses Element.closest, so clicks on children of the buttons are handled.
 *
 */
export const closeModalListener = () => {
  const modal = document.querySelector("#avatar-modal");

  document.addEventListener("click", (e) => {
    if (e.target.closest("#close-modal-btn") || e.target.closest("#cancel-avatar-btn")) {
      modal.classList.add("hidden");
    }
  });
};
