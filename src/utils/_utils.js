export const getProductId = productNumber => {
  return productNumber
    .replace(/\//g, " ")
    .split(" ")
    .join("-");
};
