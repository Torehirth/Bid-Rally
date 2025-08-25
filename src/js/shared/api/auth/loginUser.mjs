import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { saveToStorage } from "../../utils/common/saveToStorage.mjs";
import { requestOptions } from "./requestOptions.mjs";

export const loginUser = async (formData) => {
  const messageContainer = document.querySelector("#message");
  const fieldset = document.querySelector("fieldset");
  const options = requestOptions("POST", formData);
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;

  fieldset.classList.add("opacity-50");

  try {
    const response = await fetch(URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad data from login");
    }

    saveToStorage("user", data?.data);
    window.location.href = "../";
    return data;
  } catch (err) {
    displayMessage(
      messageContainer,
      "error",
      err.message || "Couldn't sign you in at this moment. Try again later.. "
    );
    console.error(err.message || "Something went wrong signing in");
    document.querySelector("form").reset();
  } finally {
    fieldset.classList.remove("opacity-50");
  }
};
