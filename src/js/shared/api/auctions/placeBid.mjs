import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getQueryParameter } from "../../utils/common/getQueryParameter.mjs";
import { requestOptions } from "../../utils/common/requestOptions.mjs";

export const placeBid = async (formData) => {
  const id = getQueryParameter("id");
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings/${id}/bids`;
  const options = requestOptions("POST", formData);

  try {
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
  }
};
