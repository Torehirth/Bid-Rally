import { getHighestBid } from "../../../utils/getHighestBid.mjs";

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

  // Dollar sign span
  const dollarSign = document.createElement("span");
  dollarSign.className = "absolute top-2.5 left-3 text-gray-500";
  dollarSign.textContent = "$";

  // Input field
  const input = document.createElement("input");
  input.type = "number";
  input.id = "bid-amount";
  input.name = "bid-amount";
  const currentHighestBid = getHighestBid(auctionData);
  input.min = currentHighestBid || "0";
  input.step = "1";
  input.placeholder = `(currentHighestBid + 1) || "001"`
  input.className =
    "focus:border-mint-green focus:ring-mint-green border-gray/50 w-full rounded-lg border px-4 py-2 pl-8 focus:ring-2 focus:outline-none";
  input.setAttribute("aria-describedby", "bid-help");
  input.required = true;

  // Help text
  const helpText = document.createElement("p");
  helpText.id = "bid-help";
  helpText.className = "mt-1 text-sm text-black/80";
  helpText.textContent = `Minimum bid: $${(currentHighestBid + 1) || "0"} (current bid + $1)`;

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn-primary w-full py-3 text-lg font-semibold";
  submitButton.id = "place-bid-btn";
  submitButton.textContent = "Place Bid";

  // Assemble input wrapper
  inputWrapper.appendChild(dollarSign);
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
