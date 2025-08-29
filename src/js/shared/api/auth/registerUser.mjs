import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { getUserData } from "../../utils/common/getUserData.mjs";
import { requestOptions } from "../../utils/common/requestOptions.mjs";
import { loginUser } from "./loginUser.mjs";

export const registerUser = async (userData) => {
  const form = document.querySelector("form");
  const messageContainer = document.querySelector("#message");

  const URL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/auth/register`
    : "https://v2.api.noroff.dev/auth/register";

  try {
    disableFieldset(true, "Registering..", ".5");

    const options = requestOptions("POST", userData);
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad data from registration");
    }

    displayMessage(messageContainer, "success", "Successfully registered!🎉");

    setTimeout(() => {
      const userData = getUserData(form);
      loginUser(userData);
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
