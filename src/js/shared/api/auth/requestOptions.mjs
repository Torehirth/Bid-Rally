export const requestOptions = (method = "GET", formData) => {
  const accessToken = "get from local storage";
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": import.meta.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  console.log(options);

  return options;
};
