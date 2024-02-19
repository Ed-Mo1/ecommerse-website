import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import CartItem from "./components/CartItem";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Routes>
        <Route path="/ecommerce-website/ " element={<Home />} />
        <Route path="/ecommerse-website/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
