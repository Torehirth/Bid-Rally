import { getHighestBid } from "../../../utils/auctions/getHighestBid.mjs";

/**
 * Creates the bid form on the details page
 */
export const createBidForm = (auctionData) => {
  // Form element
  const form = document.createElement("form");
  form.id = "bid-form";
  form.className = "space-y-4";

  // Form group div
  const formGroup = document.createElement("div");

  // Label
  const label = document.createElement("label");
  label.setAttribute("for", "bid-amount");
  label.className = "mb-2 block text-sm font-medium text-gray-700";
  label.textContent = "Your Bid Amount";

  // Input wrapper
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "relative";

  // Input field
  const input = document.createElement("input");
  input.type = "number";
  input.id = "bid-amount";
  input.name = "bid-amount";
  const currentHighestBid = getHighestBid(auctionData);
  input.min = currentHighestBid || "0";
  input.step = "1";
  input.placeholder = `$${currentHighestBid + 1 || "1"}`;
  input.className =
    "focus:border-dark-green focus:ring-dark-green focus:ring-2 focus:outline-none border-gray/80 w-full rounded-lg border px-4 py-2";
  input.setAttribute("aria-describedby", "bid-help");
  input.required = true;

  // Help text
  const helpText = document.createElement("p");
  helpText.id = "bid-help";
  helpText.className = "mt-1 text-sm text-black/80";
  helpText.textContent = `Minimum bid: $${currentHighestBid + 1 || "0"} (current bid + $1)`;

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn-primary w-full py-3 text-lg font-semibold";
  submitButton.id = "place-bid-btn";
  submitButton.textContent = "Place Bid";

  // Assemble input wrapper
  inputWrapper.appendChild(input);

  // Assemble form group
  formGroup.appendChild(label);
  formGroup.appendChild(inputWrapper);
  formGroup.appendChild(helpText);

  // Assemble form
  form.appendChild(formGroup);
  form.appendChild(submitButton);

  return form;
};
