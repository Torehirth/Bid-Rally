export const requestOptions = (method = "GET", formData) => {
  const options = {
    method: { method },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmlkcmFsbHkiLCJlbWFpbCI6ImJpZHJhbGx5QHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzU1MTYxMDA5fQ.qWcQRVPvs6ESjv0RKB7DF8C21AQULn5CbW1yZ5A5WMo",
      "X-Noroff-API-Key": import.meta.VITE.API.KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return options;
};
