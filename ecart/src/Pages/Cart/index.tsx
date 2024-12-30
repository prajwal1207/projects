import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import CartCard from "./card";

const index = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <div>
      {items?.map((product) => (
        <CartCard product={product} />
      ))}
    </div>
  );
};

export default index;
