import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getFromStorage } from "../../utils/common/getFromStorage.mjs";
import { fetchAPI } from "../fetchAPI.mjs";

export const fetchUserListings = async (container) => {
  try {
    const { name } = getFromStorage("user");
    if (!name) return;
    const data = await fetchAPI(
      container,
      `auction/profiles/${name}/listings`,
      "_active=true&_seller=true&_bids=true&limit=10"
    );

    if (!data) {
      throw new Error("Something wrong with the response");
    }
    const listings = data?.data;

    return listings;
  } catch (err) {
    displayMessage(
      container,
      "error",
      err.message || "Something went wrong fetching the users listings"
    );
    console.error(err.message);
  }
};
