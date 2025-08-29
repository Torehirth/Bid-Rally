import { filterTags } from "../../helper/filterTags.mjs";
import { isDeadlineValid } from "../../helper/isDeadLineValid.mjs";
import { isImageUrlValid } from "../../utils/common/isImageUrlValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

export const validateNewListingForm = () => {
  const title = document.querySelector("#title").value.trim().toLowerCase().replace(/ /g, "");
  const description = document
    .querySelector("#description")
    .value.trim()
    .toLowerCase()
    .replace(/ /g, "");
  const deadline = document.querySelector("#endsAt").value.trim().toLowerCase().replace(/ /g, "");
  const media = document.querySelector("#media").value.trim().toLowerCase().replace(/ /g, "");
  const tags = filterTags("#tags");

  let isValid = true;

  if (title === "") {
    isValid = false;
    setMessage("#title-message", "Please provide a title");
  } else if (title.length < 3) {
    isValid = false;
    setMessage("#title-message", "Title needs to have at least three characters");
  } else {
    removeMessage("#title-message");
  }

  if (description.length && description.length < 3) {
    isValid = false;
    setMessage("#description-message", "Please provide at least three characters");
  } else if (description.length > 280) {
    setMessage("#description-message", "Description can't be more than 280 characters");
  } else {
    removeMessage("#description-message");
  }

  if (deadline === "") {
    isValid = false;
    setMessage("#deadline-message", "Please provide a deadline");
  } else if (isDeadlineValid(deadline)) {
    isValid = false;
    setMessage("#deadline-message", "deadline needs to be ahead of time");
  } else {
    removeMessage("#deadline-message");
  }

  if (!media) {
    removeMessage("#media-message");
  } else if (!isImageUrlValid(media)) {
    isValid = false;
    setMessage("#media-message", "Please provide a complete and active image URL");
  }

  if (!tags) {
    isValid = false;
    setMessage("#tags-message", "Please provide a tag with more than 2 characters");
  } else {
    removeMessage("#tags-message");
  }
  return isValid;
};
