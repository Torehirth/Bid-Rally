import { isLoggedIn } from "../../helper/auth/isLoggedIn.mjs";

/**
 * Initialize authentication-based visibility for DOM elements.
 *
 * Scans the document for elements with a `data-visible-when` attribute and
 * toggles each element's `hidden` class according to the current authentication
 * state provided by the global `isLoggedIn()` function.
 *
 * Supported attribute values:
 * - "logged-in": the element is visible when `isLoggedIn()` returns truthy.
 * - "logged-out": the element is visible when `isLoggedIn()` returns falsy.
 *
 * Side effects:
 * - Mutates DOM by adding/removing the `hidden` class on matched elements.
 *
 * @example
 * // Run on page load or after changes to authentication state:
 * initAuthStates();
 */
export const initAuthStates = () => {
  const loggedIn = isLoggedIn();

  document.querySelectorAll("[data-visible-when]").forEach((element) => {
    const rule = element.getAttribute("data-visible-when");

    if (rule === "logged-in") {
      element.classList.toggle("hidden", !loggedIn);
    }
    if (rule === "logged-out") {
      element.classList.toggle("hidden", loggedIn);
    }
  });
};
