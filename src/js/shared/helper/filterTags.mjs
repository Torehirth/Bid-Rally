export const filterTags = (tags) => {
  // Trim whitespace in the beginning and end of the array, and get value in lowercase
  // ([" banana ", " fish "," cat "] => ["banana ", " ", " fish "," cat"])
  const enteredTags = document.querySelector(tags).value.trim().toLowerCase().split(",");

  // Trim whitespace in the beginning and end of each string
  // ([" banana ", "", " fish "," cat "] => ["banana", "fish","cat"])
  const trimmedTags = enteredTags.map((tag) => {
    return tag.trim();
  });

  // Creates new array with no empty strings
  // ([" banana ", "", " fish "," cat "] => ["banana", "fish", "cat"])
  const filteredTags = trimmedTags.filter((tag) => {
    return tag !== "";
  });
  return filteredTags;
};
