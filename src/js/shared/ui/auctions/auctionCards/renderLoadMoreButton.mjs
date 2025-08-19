import { createLoadMoreButton } from "./createLoadMoreButton.mjs";

export const renderLoadMoreButton = () => {
  const wrapper = document.querySelector("#btn-wrapper");
  const button = createLoadMoreButton();

  wrapper.append(button);
};
