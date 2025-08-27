import { createListing } from "../../api/new-listing/createListing.mjs";
import { validateNewListingForm } from "../../ui/auctions/new-listing/validateNewListingForm.mjs";
import { getNewListingFormData } from "../../utils/new-listing/getNewListingFormData.mjs";

export const handleNewListing = async () => {
  const form = document.querySelector("#create-listing-form");
  const formData = getNewListingFormData();

  const isValid = validateNewListingForm();
  if (!isValid) return;

  const newListing = await createListing(form, formData);
  console.log(newListing);

  return newListing;
};
