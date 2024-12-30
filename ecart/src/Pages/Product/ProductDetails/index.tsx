import { useParams } from "react-router-dom";
import { useProductsDetails } from "../../../hooks";
import { TProduct } from "../../../types";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/slices";

type Params = {
  id: string;
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();
  const { data } = useProductsDetails(id as string);
  const product: TProduct | null = data?.data ? data?.data : null;

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product?.title}
          </h1>
          <p className="text-gray-600 mb-4">{product && product.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            ${product && product.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 font-bold text-lg mr-2">
              {product && product.rating.rate} ★
            </span>
            <span className="text-gray-600">
              ({product && product.rating.count} reviews)
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-medium py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
