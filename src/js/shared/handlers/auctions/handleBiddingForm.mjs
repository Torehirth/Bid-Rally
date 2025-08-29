import { placeBid } from "../../api/auctions/placeBid.mjs";
import { validateBid } from "../../ui/auctions/validateBid.mjs";
import { getBiddingFormData } from "../../utils/auctions/getBiddingFormData.mjs";
import { getHighestBid } from "../../utils/auctions/getHighestBid.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { auctionDetailsPageHandler } from "./auctionDetailsPageHandler.mjs";

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
