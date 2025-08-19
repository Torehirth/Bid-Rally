export const fetchAPI = async (container, endpoint, parameter = "") => {
  const baseAPIUrl = import.meta.env.VITE_API_BASE_URL;
  // const baseAPIUrl = "https://v2.api.noroff.dev/auction/";

  try {
    const response = await fetch(`${baseAPIUrl}/${endpoint}?${parameter}`);

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Fetch failed");
    }
    return json;
  } catch (err) {
    container.innerHTML =
      "OOOps! Error when fetching the API! Try again later..";
    console.error(err);
  }
};
