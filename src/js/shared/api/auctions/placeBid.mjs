import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getQueryParameter } from "../../utils/common/getQueryParameter.mjs";
import { requestOptions } from "../../utils/common/requestOptions.mjs";

/**
 * Place a bid for the current listing.
 *
 * Sends a POST request to the API endpoint /auction/listings/:id/bids using the provided form data.
 * The listing id is taken from the current page query parameter "id".
 *
 * While the request is in progress the related form controls are disabled and a status message is shown.
 * On success a success message is displayed and the page is reloaded after 2 seconds.
 * On failure the server error message (if present) is thrown and also displayed to the user.
 *
 * Note: This function depends on external helpers: getQueryParameter, requestOptions,
 * disableFieldset, displayMessage, and environment variable VITE_API_BASE_URL.
 *
 * @async
 * @function placeBid
 * @param {FormData|Object} formData - The bid payload to send. Typically a FormData instance containing bid fields (amount, etc.).
 * @returns {Promise<Object>} Resolves with the parsed JSON response from the API when the bid is placed successfully.
 * @throws {Error} Throws an Error if the network response is not ok or if the server returns an error message.
 *
 * @example
 * // Using a FormData instance
 * const fd = new FormData();
 * fd.append('amount', 100);
 * await placeBid(fd);
 */
export const placeBid = async (formData) => {
  const id = getQueryParameter("id");
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings/${id}/bids`;
  const options = requestOptions("POST", formData);

  try {
    disableFieldset(true, "Placing bid..", ".5");
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Faulty bidding response");
    }

    displayMessage("#message", "success", "Successfully placed the bid🎉");
    setTimeout(() => {
      location.reload();
    }, 2000);

    return data;
  } catch (err) {
    console.error(err.message);
    displayMessage("#message", "error", err.message || "Something went wrong placing the bid");
  } finally {
    disableFieldset(false, "Place bid", "1");
  }
};
