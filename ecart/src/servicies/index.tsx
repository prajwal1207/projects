import { TProduct } from "../types";
import { apiCaller } from "../utils/restclient";

export const fetchProducts = async () => {
  return await apiCaller<TProduct[]>("products", "GET");
};

export const fetchProductsDetail = async (id: string) => {
  return await apiCaller<TProduct>(`products/${id}`, "GET");
};
