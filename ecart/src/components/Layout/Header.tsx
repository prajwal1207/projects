import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";

const Header = () => {
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state: RootState) => state.cart);
  return (
    <header className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <div className="text-xl font-bold"></div>
      <div className="hidden md:flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-md w-1/3">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-transparent outline-none text-white"
        />
        <button className="text-gray-400 hover:text-white">🔍</button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            className="flex items-center space-x-1"
            onClick={() => navigate("/wishlist")}
          >
            <GoHeartFill className="h-6 w-6" />
          </button>
          {2 > 0 && (
            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {2}
            </span>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => navigate("/cart")}
          >
            <FaCartShopping className="h-6 w-6" />
          </button>
          {2 > 0 && (
            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-cent  er justify-center">
              {totalQuantity}
            </span>
          )}
        </div>
        {/* User */}
        <div className="relative group">
          <button className="flex items-center space-x-1">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden md:block">Hi, User</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
              Profile
            </button>
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
