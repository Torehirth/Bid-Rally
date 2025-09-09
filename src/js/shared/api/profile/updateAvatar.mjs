import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getFromStorage } from "../../utils/common/getFromStorage.mjs";
import { requestOptions } from "../../utils/common/requestOptions.mjs";

/**
 * Update the current user's avatar by sending the provided FormData to the API.
 * Displays success/error messages, disables the form while uploading, and reloads the page on success.
 *
 * @async
 * @param {FormData} formData - FormData is getting it's value from the form input from @function getAvatarFormData.
 * @example
 * document.addEventListener("submit", (e) => {
     e.preventDefault();
 
     const valid = validateAvatarField();
     if (!valid) return;
 
     const formData = getAvatarFormData();
     updateAvatar(formData);
   });
 */
export const updateAvatar = async (formData) => {
  const { name } = getFromStorage("user");

  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/profiles/${name}`;

  const options = requestOptions("PUT", formData);

  try {
    disableFieldset(true, "Loading..", 0.5);

    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad response from API");
    }

    displayMessage("#message", "success", "Avatar updated successfully ✅");

    setTimeout(() => {
      window.location.reload();
    }, 2500);
  } catch (err) {
    console.error(err.message);
    displayMessage("#message", "error", err.message || "Something went wrong changing the avatar");
  } finally {
    disableFieldset(false, "Update Avatar", 1);
  }
};
