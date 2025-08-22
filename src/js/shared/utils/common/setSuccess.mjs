export const setSuccess = (errorEl, infoEl) => {
  const errorElement = document.querySelector(errorEl);
  const infoElement = document.querySelector(infoEl);
  errorElement.texContent = "";
  infoElement.classList.remove("hidden");
  errorElement.classList.add("hidden");
};
