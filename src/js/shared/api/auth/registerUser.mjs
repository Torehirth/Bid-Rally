import { displayMessage } from "../../utils/common/displayMessage.mjs";
import { requestOptions } from "./requestOptions.mjs";

export const registerUser = async (userData) => {
  const form = document.querySelector("#register-form");
  console.log(userData);

  const options = requestOptions("POST", userData);
  const URL = `${import.meta.env.VITE_API_BASE_URL}/auth/register`;

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);

    if (!data.ok) {
      throw new Error(data?.errors?.[0]?.message || "Bad data. Please try again later.");
    }
  } catch (err) {
    displayMessage(
      form,
      "error",
      err.message || "Could not register user at this point. Try again later.."
    );
    console.error(err.message);
  }
};
