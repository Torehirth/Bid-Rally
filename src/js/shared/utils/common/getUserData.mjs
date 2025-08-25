/**
 * Extracts and processes user data from a form element
 *
 * @param {HTMLFormElement} form - The form element containing user input fields
 * @returns {Object} The processed user data object with normalized name, email, and avatar properties
 * @description This function converts form data to an object, normalizes name and email to lowercase and trims whitespace,
 * and processes avatar data by creating an object with url and alt properties, or removes it if not provided
 *
 * @example
 * const form = document.querySelector('#userForm');
 * const data = getUserData(form);
 * console.log(data); // { name: "john", email: "john@example.com", avatar: { url: "image.jpg", alt: "Could be an image of john" } }
 */
export const getUserData = (form) => {
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  if (userData.name) userData.name = userData.name.toLowerCase().trim();

  if (userData.email) userData.email = userData.email.toLowerCase().trim();

  if (userData.avatar) {
    userData.avatar = {
      url: userData.avatar.trim(),
      alt: userData.avatar.alt || `Could be an image of ${userData.name || "the user"}`,
    };
  } else {
    delete userData.avatar;
  }

  return userData;
};
