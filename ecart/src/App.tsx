import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import CartPage from "./Pages/Cart";
import ProductsListing from "./Pages/Product";
import ProducetDetails from "./Pages/Product/ProductDetails";
import WhislistPage from "./Pages/wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsListing />} />
            <Route path="/product/:id" element={<ProducetDetails />} />
            <Route path="/wishlist" element={<WhislistPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
