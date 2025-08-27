import { navigateTo } from "../../helper/navigateTo.mjs";
import { disableFieldset } from "../../ui/common/disableFieldset.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { saveToStorage } from "../../utils/common/saveToStorage.mjs";
import { requestOptions } from "./requestOptions.mjs";

export const loginUser = async (formData) => {
  const messageContainer = document.querySelector("#message");

  const URL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/auth/login`
    : "https://v2.api.noroff.dev/auth/login";

  try {
    const options = requestOptions("POST", formData);

    disableFieldset(true, "Signing in..", ".5");

    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad data from login");
    }

    saveToStorage("user", data?.data);

    navigateTo("../");

    return data?.data;
  } catch (err) {
    displayMessage(
      messageContainer,
      "error",
      err.message || "Couldn't sign you in at this moment. Try again later.. "
    );
    console.error(err.message || "Something went wrong signing in");
    document.querySelector("form").reset();
  } finally {
    disableFieldset(false, "Sign in", "1");
  }
};
