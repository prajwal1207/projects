import { useQuery } from "react-query";
import { fetchProducts, fetchProductsDetail } from "../servicies";

export const useProducts = () => {
  return useQuery("FETCH_PRODUCTS", () => fetchProducts());
};
export const useProductsDetails = (id: string) => {
  return useQuery("FETCH_PRODUCTS_DETAILS", () => fetchProductsDetail(id));
};
