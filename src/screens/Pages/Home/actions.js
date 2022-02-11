import { productService } from "../../../services/Products";

export const getAllProducts = (setState) => {
  return productService
    .getProducts()
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => err.message);
};
