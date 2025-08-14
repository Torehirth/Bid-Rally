import createAuctionCard from "./createAuctionCard.mjs";

const renderAuctionCards = async (allAuctions, containerID) => {
  containerID.innerHTML = "";
  allAuctions.forEach((auction) => {
    const id = auction?.id;
    const title = auction?.title;
    const description = auction?.description;
    const mediaURL = auction?.media?.url;
    const timeLeft = auction?.endsAt;
    const currentBid = auction?.bids?.amount;
    const bidCount = auction?._count;

    createAuctionCard(
      id,
      title,
      description,
      mediaURL,
      timeLeft,
      currentBid,
      bidCount,
      containerID
    );
  });
};
export default renderAuctionCards;
