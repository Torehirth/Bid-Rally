export const setError = (errorEl, infoEl, message) => {
  const errorElement = document.querySelector(errorEl);
  const infoElement = document.querySelector(infoEl);
  errorElement.innerText = message;
  errorElement.classList.remove("hidden");
  infoElement.classList.add("hidden");
};
