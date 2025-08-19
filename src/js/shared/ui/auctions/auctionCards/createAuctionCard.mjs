/**
 * Creates an auction card element and appends it to the specified container
 * @param {string} title - The title of the auction item
 * @param {string} description - The description of the auction item
 * @param {string} mediaURL - The URL of the item's image
 * @param {string} mediaAltText - Alt text for the item's image
 * @param {string} timeLeft - Time remaining in the auction
 * @param {string} currentBid - The current highest bid amount
 * @param {string} bidCount - Number of bids placed on the item
 * @param {HTMLElement} containerID - The container element to append the card to
 * @param {string} itemLink - URL link to the item's detail page
 * @param {boolean} isUrgent - Whether to show urgent styling for time-sensitive auctions
 */

export const createAuctionCard = (
  title,
  description,
  mediaURL,
  mediaAltText,
  timeLeft,
  currentBid,
  bidCount,
  containerID,
  itemLink,
  isUrgent = false
) => {
  const article = document.createElement("article");
  article.className =
    "flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-xl";
  article.setAttribute("role", "listitem");

  // image
  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";

  const image = document.createElement("img");
  image.src = mediaURL;
  image.alt = mediaAltText;
  image.className = "h-48 w-full object-cover";

  // time badge
  const badgeContainer = document.createElement("div");
  badgeContainer.className = "absolute top-2 right-2";

  const timeBadge = document.createElement("span");
  timeBadge.id = "time-badge";
  const badgeClasses = isUrgent
    ? "bg-warning rounded-full px-2 py-1 text-xs font-medium text-black"
    : "bg-mint-green rounded-full px-2 py-1 text-xs font-medium text-black";
  timeBadge.className = badgeClasses;
  timeBadge.setAttribute("aria-label", "Time left in auction");
  timeBadge.textContent = timeLeft || "";

  badgeContainer.appendChild(timeBadge);
  imageContainer.appendChild(image);
  imageContainer.appendChild(badgeContainer);

  const contentContainer = document.createElement("div");
  contentContainer.className = "flex flex-grow flex-col p-4";

  const headerSection = document.createElement("div");
  headerSection.className = "mb-2 flex items-center justify-between";

  // title
  const itemTitle = document.createElement("h3");
  itemTitle.className = "text-lg font-bold";
  itemTitle.textContent = title;

  headerSection.appendChild(itemTitle);

  // description
  const itemDescription = document.createElement("p");
  itemDescription.className = "mb-3 text-sm";
  itemDescription.textContent = description;

  // bid info
  const bidInfoContainer = document.createElement("div");
  bidInfoContainer.className = "mb-4 flex-grow";

  const currentBidLabel = document.createElement("p");
  currentBidLabel.className = "text-sm";
  currentBidLabel.textContent = "Current Bid:";

  const bidAmount = document.createElement("p");
  bidAmount.className = "text-dark-green text-xl font-bold";
  bidAmount.setAttribute("aria-label", "Current bid amount");
  bidAmount.textContent = currentBid;

  const bidCountNumber = document.createElement("p");
  bidCountNumber.className = "text-xs text-black/80";
  bidCountNumber.textContent = bidCount === "1" ? "1 bid" : `${bidCount} bids`;

  bidInfoContainer.appendChild(currentBidLabel);
  bidInfoContainer.appendChild(bidAmount);
  bidInfoContainer.appendChild(bidCountNumber);

  // button
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex w-full";

  const viewDetailsLink = document.createElement("a");
  viewDetailsLink.href = itemLink;
  viewDetailsLink.className =
    "btn-primary w-full px-4 py-2 text-center text-sm";
  viewDetailsLink.setAttribute(
    "aria-label",
    `Place bid on ${title || "auction item"}`
  );
  viewDetailsLink.textContent = "View Details";

  buttonContainer.appendChild(viewDetailsLink);

  contentContainer.appendChild(headerSection);
  contentContainer.appendChild(itemDescription);
  contentContainer.appendChild(bidInfoContainer);
  contentContainer.appendChild(buttonContainer);

  article.appendChild(imageContainer);
  article.appendChild(contentContainer);

  const articlesGridContainer = containerID;
  articlesGridContainer.appendChild(article);
};
