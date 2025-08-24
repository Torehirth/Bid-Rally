export const createLoadMoreButton = () => {
  const button = document.createElement("button");
  button.setAttribute("aria-label", "Load more auction items");
  button.id = "load-more-btn";

  const loader = document.querySelector("#loader");
  button.classList = loader
    ? "hidden"
    : "btn-secondary flex cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors";

  const NS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "h-5 w-5");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS(NS, "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4");

  svg.appendChild(path);
  button.appendChild(svg);
  button.append("Load more auctions");

  return button;
};
