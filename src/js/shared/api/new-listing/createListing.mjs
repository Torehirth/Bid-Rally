import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { requestOptions } from "../auth/requestOptions.mjs";

export const createListing = async (container, formData) => {
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings`;
  const options = requestOptions("POST", formData);
  try {
    disableFieldset(true, "Publishing auction..", ".5");

    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Something wrong with the response");
    }

    displayMessage(container, "success", "Successfully listed your item!🎉");

    setTimeout(() => {
      window.location.href = "../profile/";
    }, 2000);

    return data;
  } catch (err) {
    displayMessage(container, "error", err.message || "Something went wrong creating the listing");
    console.error(err.message || "Something went wrong creating the listing");
  } finally {
    disableFieldset(false, "Create auction", "1");
  }
};
