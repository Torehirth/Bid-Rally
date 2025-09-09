import { updateAvatar } from "../../api/profile/updateAvatar.mjs";
import { validateAvatarField } from "../../ui/profile/validateAvatar.mjs";
import { getAvatarFormData } from "../../utils/profile/getAvatarFormData.mjs";

/**
 * Attach a global submit listener to handle avatar form submissions.
 *
 * Prevents the form's default submission, validates the avatar input,
 * gathers the form data, and calls updateAvatar to perform the update.
 *
 * @function handleAvatarSubmit
 * @returns {void}
 *
 * @example
 * // Initialize once during app startup
 * import { handleAvatarSubmit } from './shared/handlers/profile/handleAvatarSubmit.mjs';
 * handleAvatarSubmit();
 */
export const handleAvatarSubmit = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid = validateAvatarField();
    if (!valid) return;

    const formData = getAvatarFormData();
    updateAvatar(formData);
  });
};
