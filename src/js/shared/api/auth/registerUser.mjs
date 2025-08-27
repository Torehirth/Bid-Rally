import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { requestOptions } from "./requestOptions.mjs";

export const registerUser = async (userData) => {
  const messageContainer = document.querySelector("#message");
  const fieldset = document.querySelector("fieldset");
  const options = requestOptions("POST", userData);
  const URL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/auth/register`
    : "https://v2.api.noroff.dev/auth/register";

  try {
    disableFieldset(true, "Registering..", ".5");

    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad data from registration");
    }

    displayMessage(messageContainer, "success", "Successfully registered!🎉");
    setTimeout(() => {
      window.location.href = "../";
    }, 2000);
    return data;
  } catch (err) {
    displayMessage(
      messageContainer,
      "error",
      err.message || "Could not register user at this point. Try again later.."
    );
    console.error(err.message);
    document.querySelector("form").reset();
  } finally {
    disableFieldset(false, "Create account", "1");
  }
};
