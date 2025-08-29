import { createListing } from "../../api/auctions/createListing.mjs";
import { validateNewListingForm } from "../../ui/auctions/validateNewListingForm.mjs";
import { getNewListingFormData } from "../../utils/auctions/getNewListingFormData.mjs";

export const handleNewListing = async () => {
  const form = document.querySelector("#create-listing-form");
  const formData = getNewListingFormData();

  const isValid = validateNewListingForm();
  if (!isValid) return;

  const newListing = await createListing(form, formData);
  return newListing;
};
