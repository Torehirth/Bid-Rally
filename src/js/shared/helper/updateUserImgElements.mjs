/**
 * Updates user image elements with provided avatar URL and alt text
 * @param {string} container - CSS selector for the image element container
 * @param {string} avatarURL - URL of the avatar image to set as src
 * @param {string} avatarAlt - Alt text for the avatar image
 * @returns {void}
 */
export const updateUserImgElements = (container, avatarURL, avatarAlt) => {
  const element = document.querySelector(container);
  if (!avatarURL || !avatarAlt) {
    return;
  }
  element.src = avatarURL;
  element.alt = avatarAlt;
};
