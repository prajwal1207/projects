import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../../features/slices";
import { TProductWithQuantity } from "../../../types";

interface CartCardProps {
  product: TProductWithQuantity;
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(removeItem(product));
  };

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: product.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity: product.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(product));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-grow ml-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>

        <div className="flex items-center mt-2">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-200 rounded-l px-3 py-1"
          >
            -
          </button>
          <span className="px-4">{product.quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-200 rounded-r px-3 py-1"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-red-600 text-white py-1 px-4 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
