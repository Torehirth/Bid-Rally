import { createAuctionPageInfoSection } from "./createAuctionPageInfoSection.mjs";
import { createImageSection } from "./createImageSection.mjs";

export const createAuctionListingDetails = (auctionData) => {
  const container = document.createElement("div");
  container.className = "container mx-auto px-4";

  const gridWrapper = document.createElement("div");
  gridWrapper.className = "grid grid-cols-1 gap-8 lg:grid-cols-2";

  // left column (image section)
  const imageSection = createImageSection(auctionData);

  // right column (item information)
  const itemInfoSection = createAuctionPageInfoSection(auctionData);

  gridWrapper.appendChild(imageSection);
  gridWrapper.appendChild(itemInfoSection);

  container.appendChild(gridWrapper);

  return container;
};
