import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

export const validateBid = (highestBid, inputValue) => {
  let isValid = true;

  if (!inputValue) {
    isValid = false;
    setMessage("#error-message", "You need to enter a bid");
  } else if (inputValue <= highestBid) {
    isValid = false;
    setMessage("#error-message", "You need to enter a larger bid than the current highest bid");
  } else {
    removeMessage("#error-message");
  }
  return isValid;
};
