export const createLoggedOutUserNav = (loginHref, registerHref) => {
  const loggedOutDiv = document.createElement("div");
  loggedOutDiv.className = "flex items-center gap-3";
  loggedOutDiv.setAttribute("role", "group");
  loggedOutDiv.setAttribute("aria-label", "Authentication actions");

  const loginLink = document.createElement("a");
  loginLink.href = loginHref;
  loginLink.ariaLabel = "login button";
  loginLink.className =
    "hover:text-dark-green px-1 py-1 text-sm font-medium md:px-4 md:py-2 md:text-base";
  loginLink.textContent = "Login";

  const registerLink = document.createElement("a");
  registerLink.href = registerHref;
  registerLink.ariaLabel = "register button";
  registerLink.className = "btn-primary px-1 py-1 text-sm font-medium md:px-4 md:py-2 md:text-base";
  registerLink.textContent = "Register";

  loggedOutDiv.append(loginLink, registerLink);

  return loggedOutDiv;
};
