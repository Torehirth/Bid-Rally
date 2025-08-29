import { handleNewListing } from "../../handlers/auctions/handleNewListing.mjs";

export const submitNewListing = () => {
  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newListing = await handleNewListing();

    return newListing;
  });
};
