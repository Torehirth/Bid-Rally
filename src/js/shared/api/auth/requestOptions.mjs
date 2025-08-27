import { getFromStorage } from "../../utils/common/getFromStorage.mjs";

export const requestOptions = (method = "GET", formData) => {
  const user = getFromStorage("user");
  const accessToken = user?.accessToken;
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return options;
};
