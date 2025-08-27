import { handleNewListing } from "../handlers/new-listing/handleNewListing.mjs";

export const submitNewListing = () => {
  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newListing = await handleNewListing();

    return newListing;
  });
};
