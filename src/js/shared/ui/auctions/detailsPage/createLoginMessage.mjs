/**
 * Creates the login required message on the details page
 */
export const createLoginMessage = () => {
  const loginDiv = document.createElement("div");
  loginDiv.id = "login-required";
  loginDiv.className = "text-center";

  const loginText = document.createElement("p");
  loginText.className = "mt-1 text-black/80";
  loginText.textContent = "You must be logged in to place a bid";

  loginDiv.appendChild(loginText);

  return loginDiv;
};
