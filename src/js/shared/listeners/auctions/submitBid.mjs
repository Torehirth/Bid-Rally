import { handleBiddingForm } from "../../handlers/auctions/handleBiddingForm.mjs";

export const submitBid = () => {
  document.addEventListener("submit", (e) => {
    if (e.target.id === "bid-form") {
      e.preventDefault();
      handleBiddingForm("#message", e);
    }
  });
};
