export const fetchAPI = async (container, endpoint, parameter = "") => {
  const baseAPIUrl = import.meta.env.VITE_API_BASE_URL;

  try {
    const response = await fetch(`${baseAPIUrl}/${endpoint}?${parameter}`);

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Fetch failed");
    }

    const json = await response.json();

    return json;
  } catch (err) {
    container.innerHTML =
      "OOOps! Error when fetching the API! Try again later..";
    console.error(err);
  }
};
