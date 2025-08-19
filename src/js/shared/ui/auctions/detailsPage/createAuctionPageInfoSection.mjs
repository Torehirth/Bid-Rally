import { createBiddingFormSection } from "./createBiddingFormSection.mjs";
import { createBidSection } from "./createBidSection.mjs";
import { createDescriptionSection } from "./createDescriptionSection.mjs";
import { createDetailsSection } from "./createDetailsSection.mjs";
import { createTitleSection } from "./createTitleSection.mjs";

/**
 * Creates the item information section (right column) of the details page
 */
export const createAuctionPageInfoSection = (auctionData) => {
  // Main item info container
  const itemInfoContainer = document.createElement("div");
  itemInfoContainer.className =
    "border-gray/50 space-y-6 rounded-lg border bg-white p-6";

  // Create all subsections
  const titleSection = createTitleSection(auctionData);
  const bidSection = createBidSection(auctionData);
  const biddingFormSection = createBiddingFormSection(auctionData);
  const descriptionSection = createDescriptionSection(auctionData);
  const detailsSection = createDetailsSection(auctionData);

  // Append all sections
  itemInfoContainer.appendChild(titleSection);
  itemInfoContainer.appendChild(bidSection);
  itemInfoContainer.appendChild(biddingFormSection);
  itemInfoContainer.appendChild(descriptionSection);
  itemInfoContainer.appendChild(detailsSection);

  return itemInfoContainer;
};
