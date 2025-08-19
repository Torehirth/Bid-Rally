import { auctionCardsHandler } from "../shared/handlers/auctions/auctionCardsHandler.mjs";

export const initAuctionsPage = async () => {
  console.log("init Auctions page");
  auctionCardsHandler();
};
