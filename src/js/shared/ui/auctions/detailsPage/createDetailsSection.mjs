import { createDetailItem } from "./createDetailItem.mjs";

/**
 * Creates the item details section on the details page
 */
export const createDetailsSection = (auctionData) => {
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "border-gray/50 rounded-lg border bg-white p-6";

  const detailsTitle = document.createElement("h2");
  detailsTitle.className = "mb-4 text-xl font-semibold";
  detailsTitle.textContent = "Item Details";

  const detailsList = document.createElement("dl");
  detailsList.className = "grid grid-cols-1 gap-4 sm:grid-cols-2";

  const details = [
    {
      label: "Id:",
      value: auctionData.id || "Item has no ID",
    },
    {
      label: "Tags:",
      value: auctionData.tags.join(", ") || "",
    },
    {
      label: "Updated:",
      value:
        new Date(auctionData.updated).toLocaleString() || "No date available",
    },
    {
      label: "Date listed:",
      value:
        new Date(auctionData.created).toLocaleString() || "No date available",
    },
  ];

  details.forEach((detail) => {
    const detailItem = createDetailItem(detail.label, detail.value);
    detailsList.appendChild(detailItem);
  });

  detailsContainer.appendChild(detailsTitle);
  detailsContainer.appendChild(detailsList);

  return detailsContainer;
};
