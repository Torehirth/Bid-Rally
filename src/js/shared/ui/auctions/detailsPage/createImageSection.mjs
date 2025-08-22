/**
 * Creates the image section (left column) of the details page
 */
export const createImageSection = (auctionData) => {
  // Image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "space-y-4";

  // Image wrapper
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "relative";

  // Main image
  const mainImage = document.createElement("img");
  mainImage.id = "main-image";

  mainImage.src =
    auctionData?.media?.[0]?.url ||
    "/Bid-Rally/public/assets/images/listing-placeholder.webp";
  mainImage.alt = auctionData?.media?.[0]?.alt || `image of ${auctionData?.title}`;
  mainImage.className = "h-96 w-full rounded-lg object-cover";

  imageWrapper.appendChild(mainImage);
  imageContainer.appendChild(imageWrapper);

  return imageContainer;
};
