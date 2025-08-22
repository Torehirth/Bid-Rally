export const isImageUrlValid = (URL) => {
  const imageRegEx =
    /^https?:\/\/[^\s?#]+\.(?:jpe?g|png|gif|bmp|webp|svg)(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
  return imageRegEx.test(URL.toString().toLowerCase().trim());
};
