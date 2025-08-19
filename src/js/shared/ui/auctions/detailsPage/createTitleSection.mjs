/**
 * Creates the title and seller section
 */

export const createTitleSection = (auctionData) => {
  const titleContainer = document.createElement("div");

  // Main title
  const title = document.createElement("h1");
  title.id = "item-heading";
  title.className = "mb-2 text-3xl font-bold";
  title.textContent = auctionData?.title || "Vintage Camera";

  // Seller info paragraph
  const sellerInfo = document.createElement("p");
  sellerInfo.className = "text-gray-600";
  sellerInfo.textContent = "Listed by: ";

  // Seller name span
  const sellerName = document.createElement("span");
  sellerName.className = "font-medium text-black";
  sellerName.textContent = auctionData?.seller?.name || "Unknown seller";

  sellerInfo.appendChild(sellerName);

  titleContainer.appendChild(title);
  titleContainer.appendChild(sellerInfo);

  return titleContainer;
};
