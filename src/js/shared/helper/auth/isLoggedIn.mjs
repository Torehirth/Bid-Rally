import { getFromStorage } from "../../utils/common/getFromStorage.mjs";

/**
 * Check whether a user is logged in by verifying stored name and access token.
 *
 * Returns early if no user is found in storage.
 */
export const isLoggedIn = () => {
  const user = getFromStorage("user");
  if (!user) return;

  if (user.name && user.accessToken) {
    return true;
  }
};
