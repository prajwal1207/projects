import React, { useMemo, useState } from "react";
import Filters, { TFilter } from "../../components/Filters";
import ProductCard from "../../components/OrderCard";
import Spinner from "../../components/Spinner";
import { useProducts } from "../../hooks";
import { TProduct, TProductWithQuantity } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

/**
 * Filters products based on the active filters.
 * @param products - The list of products to filter.
 * @param activeFilters - The currently selected filters.
 * @returns The filtered list of products.
 */
const filterProducts = (products: TProduct[], activeFilters: TFilter[]) => {
  const activeCategories = activeFilters
    .filter((filter) => filter.active)
    .map((filter) => filter.value);

  if (activeCategories.length === 0) {
    return products;
  }

  return products.filter((product) =>
    activeCategories.includes(product.category.toLowerCase())
  );
};

/**
 * Maps unique product categories to filter options.
 * @param products - The list of products.
 * @returns The list of filter options.
 */
const getCategoryFilters = (products: TProduct[]) => {
  return products
    .filter(
      (product, index, self) =>
        index === self.findIndex((p) => p.category === product.category)
    )
    .map((product) => ({
      id: product.id,
      title: product.category,
      value: product.category.toLowerCase(),
      active: false,
    }));
};



const index = () => {
  const [activeFilters, setActiveFilters] = useState<TFilter[]>([]);
  const { data, isLoading } = useProducts();
  const products = data?.data ? data?.data : [];
  const { searched  } = useSelector((state: RootState) => state.cart);

  const productsWithQuantities: TProductWithQuantity[] = useMemo(
    () => products.map((item) => ({ ...item, quantity: 0 })),
    [products]
  );

  const filters = getCategoryFilters(productsWithQuantities);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <Filters
            onChange={(updatedFilters) => setActiveFilters(updatedFilters)}
            options={filters}
          />
          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filterProducts(data?.data || [], activeFilters).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default index;
