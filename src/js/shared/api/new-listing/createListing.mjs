import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { requestOptions } from "../auth/requestOptions.mjs";

export const createListing = async (container, formData) => {
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings`;
  const options = requestOptions("POST", formData);
  try {
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Something wrong with the response");
    }
    console.log(data);
    return data;
  } catch (err) {
    displayMessage(container, "error", err.message || "Something went wrong creating the listing");
    console.error(err.message || "Something went wrong creating the listing");
  }
};
