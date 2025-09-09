export const createLoggedInUserNav = (profileHref) => {
  const loggedInDiv = document.createElement("div");
  loggedInDiv.className = "flex items-center gap-3 md:gap-8";
  loggedInDiv.setAttribute("role", "group");
  loggedInDiv.setAttribute("aria-label", "User account actions");

  const profileLink = document.createElement("a");
  profileLink.href = profileHref;
  profileLink.className =
    "hover:text-dark-green flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors";
  profileLink.setAttribute("aria-label", "View user profile");

  const profileIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  profileIcon.classList.add("size-5");
  profileIcon.setAttribute("fill", "currentColor");
  profileIcon.setAttribute("viewBox", "0 0 448 512");
  profileIcon.setAttribute("aria-hidden", "true");

  const profilePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  profilePath.setAttribute(
    "d",
    "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
  );
  profileIcon.appendChild(profilePath);

  const profileSpan = document.createElement("span");
  profileSpan.textContent = "Profile";

  profileLink.append(profileIcon, profileSpan);

  const logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.id = "logout-btn";
  logoutLink.className =
    "hover:text-dark-green flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors";
  logoutLink.setAttribute("aria-label", "Log out of account");

  const logoutIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  logoutIcon.classList.add("size-5");
  logoutIcon.setAttribute("fill", "currentColor");
  logoutIcon.setAttribute("viewBox", "0 0 512 512");
  logoutIcon.setAttribute("aria-hidden", "true");

  const logoutPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  logoutPath.setAttribute(
    "d",
    "M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0zM502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
  );
  logoutIcon.appendChild(logoutPath);

  const logoutSpan = document.createElement("span");
  logoutSpan.textContent = "Log out";

  logoutLink.append(logoutIcon, logoutSpan);
  // Add both links to loggedInDiv
  loggedInDiv.append(profileLink, logoutLink);

  return loggedInDiv;
};
