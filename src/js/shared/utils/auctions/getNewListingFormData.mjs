import { filterTags } from "../../helper/filterTags.mjs";

export const getNewListingFormData = () => {
  const form = document.querySelector("#create-listing-form");
  const data = new FormData(form);
  const formData = Object.fromEntries(data);

  formData.endsAt = new Date(formData.endsAt);

  if (formData.tags === "" || formData.tags.length === 0) {
    delete formData.tags;
  } else {
    formData.tags = filterTags("#tags");
  }

  if (formData.media) {
    formData.media = [
      {
        url: formData.media,
        alt: `Could be an image of ${formData.title}`,
      },
    ];
  } else {
    delete formData.media;
  }

  return formData;
};
