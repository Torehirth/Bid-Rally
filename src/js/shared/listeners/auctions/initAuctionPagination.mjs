import { renderAuctionPage } from "../../handlers/auctions/renderAuctionPage.mjs";

export const initAuctionPagination = () => {
  const loadMoreBtn = document.querySelector("#load-more-btn");
  let sortValue = "endsAt";
  let sortOrder = "asc";
  let currentPage = 1;

  // Sorting
  const sortSelect = document.querySelector("#sort-select");
  sortSelect.addEventListener("change", (e) => {
    const option = e.target.selectedOptions[0];
    sortValue = option.value;
    sortOrder = option.dataset.sortOrder;
    renderAuctionPage(currentPage, sortValue, sortOrder);
  });

  renderAuctionPage(currentPage, sortValue, sortOrder);

  loadMoreBtn.addEventListener("click", async () => {
    currentPage++;
    renderAuctionPage(currentPage);
  });
};
