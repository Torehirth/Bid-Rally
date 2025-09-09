/**
 * Extracts form values from the form with id "avatar-form" and returns a plain object.
 *
 * - Finds the form element with id "avatar-form"
 * - Builds a FormData object from the form and converts it to a plain object
 * - If an "avatar" field exists and is non-empty, replaces its value with an object:
 *     { url: string, alt: string }
 * - If the "avatar" field is empty or missing, the property is removed from the returned object
 *
 * @example
 * // Given HTML:
 * // <form id="avatar-form">
 * //   <input name="username" value="alice" />
 * //   <input name="avatar" value="https://example.com/avatar.jpg" />
 * // </form>
 * //
 * // Calling:
 * // const data = getAvatarFormData();
 * //
 * // Produces:
 * // {
 * //   avatar: {
 * //     url: "https://example.com/avatar.jpg",
 * //     alt: "Could be an image of user"
 * //   }
 * // }
 */
export const getAvatarFormData = () => {
  const form = document.querySelector("#avatar-form");
  const data = new FormData(form);
  const formData = Object.fromEntries(data);

  if (formData.avatar) {
    formData.avatar = {
      url: formData.avatar,
      alt: `Could be an image of user`,
    };
  } else {
    delete formData.avatar;
  }

  return formData;
};
