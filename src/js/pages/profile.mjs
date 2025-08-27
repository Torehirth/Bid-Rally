import { requestOptions } from "../shared/api/auth/requestOptions.mjs";
import { fetchAPI } from "../shared/api/fetchAPI.mjs";
import { fetchUser } from "../shared/api/profile/fetchUser.mjs";
import { handleUserUIUpdates } from "../shared/handlers/user/handleUserUIUpdates.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { renderAuctionCards } from "../shared/ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayMessage } from "../shared/utils/common/displayMessage.mjs";
import { getFromStorage } from "../shared/utils/common/getFromStorage.mjs";
import { isImageUrlValid } from "../shared/utils/common/isImageUrlValid.mjs";
import { removeMessage } from "../shared/utils/common/removeMessage.mjs";
import { setMessage } from "../shared/utils/common/setMessage.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initProfilePage = () => {
  toggleMobileNav();
  fetchUser();
  handleUserUIUpdates();
  updateCopyright();
  handleUsersAuctionCards();
  console.log("init profile page");
};

// fetch user listings
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

// NEED TO FINISH WHEN LISTINGS ARE MADE!!!!!!!

// display listings with the same cards as the rest of the site
const handleUsersAuctionCards = async () => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const listings = await fetchUserListings(listingsContainer);

  console.log(listings);

  renderAuctionCards(listings, listingsContainer);
};

// ---------------------------------------------------------------------------------------------

// Create listing
// ---
// validate form
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

export const isDeadlineValid = (date) => {
  const today = new Date().getTime();
  const deadline = new Date(date).getTime();
  return today >= deadline;
};

export const filterTags = (tags) => {
  // Trim whitespace in the beginning and end of the array, and get value in lowercase
  // ([" banana ", " fish "," cat "] => ["banana ", " ", " fish "," cat"])
  const enteredTags = document.querySelector(tags).value.trim().toLowerCase().split(",");

  // Trim whitespace in the beginning and end of each string
  // ([" banana ", "", " fish "," cat "] => ["banana", "fish","cat"])
  const trimmedTags = enteredTags.map((tag) => {
    return tag.trim();
  });

  // Creates new array with no empty strings
  // ([" banana ", "", " fish "," cat "] => ["banana", "fish", "cat"])
  const filteredTags = trimmedTags.filter((tag) => {
    return tag !== "";
  });
  return filteredTags;
};

// get form data
export const getNewListingFormData = () => {
  const form = document.querySelector("#create-listing-form");
  const data = new FormData(form);
  const formData = Object.fromEntries(data);

  // formData.tags = filterTags("#tags");
  // formData.tags = delete formData.tags;
  formData.endsAt = new Date(formData.endsAt);

  if (formData.tags === "" || formData.tags.length === 0) {
    delete formData.tags;
  }

  if (formData.media) {
    formData.media = {
      url: formData.media,
      alt: `Could be an image of ${formData.title}`,
    };
  } else {
    delete formData.media;
  }
  return formData;
};

// submit listing
export const handleNewListing = () => {
  const form = document.querySelector("#create-listing-form");

  const formData = getNewListingFormData();
  const isValid = validateNewListingForm();
  console.log(isValid);
  if (!isValid) return;

  sendListing(form, formData);
};

export const submitNewListing = () => {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    handleNewListing();
  });
};

// create POST request
export const sendListing = async (container, formData) => {
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings`;
  const options = requestOptions("POST", formData);
  try {
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Something wrong with the response");
    }

    console.log(data);
  } catch (err) {
    displayMessage(container, "error", err.message || "Something went wrong creating the listing");
    console.error(err.message || "Something went wrong creating the listing");
  }
};

submitNewListing();
