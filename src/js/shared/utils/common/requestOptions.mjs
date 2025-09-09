import { getFromStorage } from "./getFromStorage.mjs";

/**
 * Create fetch request options including authorization and API key headers.
 *
 * @param {string} [method="GET"] - HTTP method to use for the request (e.g. "GET", "POST").
 * @param {*} [formData] - Payload to be sent as the request body; will be JSON.stringified.
 * @returns {{method: string, headers: {Authorization: string, "X-Noroff-API-Key": string, "Content-Type": string}, body: string}} An options object suitable for fetch().
 *
 * @remarks
 * - Retrieves the current user via getFromStorage("user") and uses user.accessToken for the
 *   Authorization header in the form "Bearer <token>". If no user/accessToken is present, the
 *   Authorization header will contain "Bearer undefined".
 * - Reads the API key from import.meta.env.VITE_API_KEY and sets it as "X-Noroff-API-Key".
 * - Sets "Content-Type" to "application/json" and stringifies the provided formData into the body.
 * - Note that many servers/clients ignore request bodies for GET/HEAD requests; the function still
 *   includes a JSON-stringified body if formData is provided.
 */
export const requestOptions = (method = "GET", formData) => {
  const user = getFromStorage("user");
  const accessToken = user?.accessToken;

  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return options;
};
