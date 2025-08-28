import { requestOptions } from "../shared/api/auth/requestOptions.mjs";
import { auctionDetailsPageHandler } from "../shared/handlers/auctions/auctionDetailsPageHandler.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { getHighestBid } from "../shared/utils/auctions/getHighestBid.mjs";
import { displayMessage } from "../shared/utils/common/displayMessage.mjs";
import { getQueryParameter } from "../shared/utils/common/getQueryParameter.mjs";
import { removeMessage } from "../shared/utils/common/removeMessage.mjs";
import { setMessage } from "../shared/utils/common/setMessage.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAuctionDetailsPage = () => {
  toggleMobileNav();
  auctionDetailsPageHandler();
  updateCopyright();
  console.log("init Item detail page");
};

export const getBiddingFormData = (e) => {
  const form = e.target;
  const formData = Object.fromEntries(new FormData(form));

  formData.amount = Number(formData.amount);
  return formData;
};

export const validateBid = (highestBid, inputValue) => {
  let isValid = true;

  if (!inputValue) {
    isValid = false;
    setMessage("#error-message", "You need to enter a bid");
  } else if (inputValue < highestBid || inputValue == highestBid) {
    isValid = false;
    setMessage("#error-message", "You need to enter a larger bid than the current highest bid");
  } else {
    removeMessage("#error-message");
  }

  return isValid;
};

export const placeBid = async (formData) => {
  const id = getQueryParameter("id");
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auction/listings/${id}/bids`;
  const options = requestOptions("POST", formData);

  try {
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Faulty bidding response");
    }

    return data;
  } catch (err) {
    console.error(err.message);
    displayMessage("#message", "error", err.message || "Something went wrong placing the bid");
  }
};

export const handleBiddingForm = async (messageContainer, e) => {
  const container = document.querySelector(messageContainer);

  try {
    const data = await auctionDetailsPageHandler();
    const highestBid = getHighestBid(data);
    const formData = getBiddingFormData(e);
    const isValid = validateBid(highestBid, formData.amount);

    if (!isValid) return;

    placeBid(formData);
  } catch (err) {
    console.error(err.message);
    displayMessage(container, "error", err.message || "Something went wrong validating the bid");
  }
};

export const submitBid = () => {
  document.addEventListener("submit", (e) => {
    if (e.target.id === "bid-form") {
      e.preventDefault();
      handleBiddingForm("#message", e);
    }
  });
};

submitBid();

// // Listen on document or a parent container that exists
// document.addEventListener("submit", function (e) {
//   if (e.target.id === "bid-form") {
//     e.preventDefault();
//     console.log("FORM INTERCEPTED!");
//     // Your bid handling code here
//   }
// });
// --------------------------------------------------------------------------

// export const initAuctionDetailsPage = async () => {
//   toggleMobileNav();
//   await auctionDetailsPageHandler();
//   updateCopyright();
//   submitBid();
//   console.log("init Item detail page");
// };

// export const getBiddingFormData = () => {
//   const formEl = document.querySelector("#bid-form");
//   const formData = Object.fromEntries(new FormData(formEl));
//   console.log(formData);
//   return formData;
// };

// export const submitBid = () => {
//   const formElement = document.querySelector("#bid-form");
//   formElement.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     await handleBiddingForm("#bid-message");
//   });
// };

// export const validateBid = async (highestBid) => {
//   console.log(input);

//   const amount = Number(input);

//   let isValid = true;
//   isValid = amount > highestBid;
//   console.log(isValid);

//   return isValid;
// };

// export const handleBiddingForm = async (messageContainer) => {
//   const container = document.querySelector(messageContainer);

//   try {
//     const data = getBiddingFormData();
//     console.log(data);

//     const auction = await auctionDetailsPageHandler();
//     const highestBid = getHighestBid(auction);

//     const isValid = await validateBid(highestBid);
//     if (!isValid) {
//       displayMessage(container, "error", `Your bid must be higher than ${highestBid}.`);
//       return;
//     }

//     return data;
//   } catch (err) {
//     console.error(err.message);
//     displayMessage(container, "error", "Something went wrong validating the bid");
//   }
// };
