import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../features/slices";
import { TProduct } from "../../types";
import ReadMore from "../ReadMore";

interface ProductPropsType {
  product: TProduct;
}

const ProductCard: React.FC<ProductPropsType> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto p-4">
      <img
        src={product?.image}
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>

        <p className="text-sm text-gray-600 mt-2">
          <ReadMore children={product.description} />
        </p>
        <div className="flex items-center mt-3">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 hover:w-h-6 hover:h-w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.366 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.366-2.448a1 1 0 00-1.176 0L4.576 15.45c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L.594 6.564c-.783-.57-.381-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            {product.rating.count}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-lg mt-4"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-lg mt-4"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
