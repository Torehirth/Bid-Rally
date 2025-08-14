const createAuctionCard = (
  id,
  title,
  description,
  mediaURL,
  timeLeft,
  currentBid,
  bidCount,
  containerID
) => {
  // Create the main article element (the card container)
  const article = document.createElement("article");
  article.className =
    "flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-xl";
  article.setAttribute("role", "listitem");

  // Create the image container div
  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";

  // Create the main image
  const image = document.createElement("img");
  image.src = mediaURL || "/assets/images/placeholder.webp";
  image.alt = title || "Auction item";
  image.className = "h-48 w-full object-cover";

  // Create the time badge container
  const badgeContainer = document.createElement("div");
  badgeContainer.className = "absolute top-2 right-2";

  // Create the time badge span
  const timeBadge = document.createElement("span");
  timeBadge.className =
    "bg-mint-green rounded-full px-2 py-1 text-xs font-medium text-black";
  timeBadge.setAttribute("aria-label", "Time left in auction");
  timeBadge.textContent = timeLeft || "Time expired";

  // Append image and badge to image container
  badgeContainer.appendChild(timeBadge);
  imageContainer.appendChild(image);
  imageContainer.appendChild(badgeContainer);

  // Create the content container
  const contentContainer = document.createElement("div");
  contentContainer.className = "flex flex-grow flex-col p-4";

  // Create the header section
  const headerSection = document.createElement("div");
  headerSection.className = "mb-2 flex items-center justify-between";

  // Create the title
  const itemTitle = document.createElement("h3");
  itemTitle.className = "text-lg font-bold";
  itemTitle.textContent = title || "Untitled Auction";

  // Append title to header
  headerSection.appendChild(itemTitle);

  // Create the description paragraph
  const itemDescription = document.createElement("p");
  itemDescription.className = "mb-3 text-sm";
  itemDescription.textContent = description || "No description available";

  // Create the bid info container
  const bidInfoContainer = document.createElement("div");
  bidInfoContainer.className = "mb-4 flex-grow";

  // Create "Current Bid:" label
  const currentBidLabel = document.createElement("p");
  currentBidLabel.className = "text-sm";
  currentBidLabel.textContent = "Current Bid:";

  // Create the bid amount
  const bidAmount = document.createElement("p");
  bidAmount.className = "text-dark-green text-xl font-bold";
  bidAmount.setAttribute("aria-label", "Current bid amount");
  bidAmount.textContent = `$${currentBid || 0}`;

  // Create the bid count
  const bidCountNumber = document.createElement("p");
  bidCountNumber.className = "text-xs text-black/80";
  bidCountNumber.textContent = `${bidCount || 0} bids`;

  // Append bid info elements
  bidInfoContainer.appendChild(currentBidLabel);
  bidInfoContainer.appendChild(bidAmount);
  bidInfoContainer.appendChild(bidCountNumber);

  // Create the button container
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex w-full";

  // Create the view details link/button
  const viewDetailsLink = document.createElement("a");
  viewDetailsLink.href = `/auctions/item.html?id=${id || ""}`;
  viewDetailsLink.className =
    "btn-primary w-full px-4 py-2 text-center text-sm";
  viewDetailsLink.setAttribute(
    "aria-label",
    `Place bid on ${title || "auction item"}`
  );
  viewDetailsLink.textContent = "View Details";

  // Append link to button container
  buttonContainer.appendChild(viewDetailsLink);

  // Assemble the content container
  contentContainer.appendChild(headerSection);
  contentContainer.appendChild(itemDescription);
  contentContainer.appendChild(bidInfoContainer);
  contentContainer.appendChild(buttonContainer);

  // Assemble the final article
  article.appendChild(imageContainer);
  article.appendChild(contentContainer);

  const articlesGridContainer = containerID;
  articlesGridContainer.appendChild(article);
};

export default createAuctionCard;
