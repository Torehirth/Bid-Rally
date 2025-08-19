/**
 * Creates the description section on the details page
 */
export const createDescriptionSection = (auctionData) => {
  const descContainer = document.createElement("div");
  descContainer.classList = "ml-4";

  // Description title
  const descTitle = document.createElement("h2");
  descTitle.className = "mb-4 text-xl font-semibold";
  descTitle.textContent = "Description";

  // Description wrapper
  const descWrapper = document.createElement("div");
  descWrapper.className = "flex max-w-[65ch] flex-col gap-3";

  // Description paragraph
  const descParagraph = document.createElement("p");
  descParagraph.textContent =
    auctionData.description || "Description not available";

  descWrapper.appendChild(descParagraph);
  descContainer.appendChild(descTitle);
  descContainer.appendChild(descWrapper);

  return descContainer;
};
