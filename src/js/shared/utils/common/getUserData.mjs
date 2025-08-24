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
