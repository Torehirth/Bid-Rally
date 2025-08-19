/**
 * Creates individual detail items (dt/dd pairs) in the detailsSection on the details page
 */
export const createDetailItem = (label, value) => {
  const detailDiv = document.createElement("div");

  const dt = document.createElement("dt");
  dt.className = "text-sm font-medium text-black/80";
  dt.textContent = label;

  const dd = document.createElement("dd");
  dd.className = "text-sm text-black";
  dd.textContent = value;

  detailDiv.appendChild(dt);
  detailDiv.appendChild(dd);

  return detailDiv;
};
