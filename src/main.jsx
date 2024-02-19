import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SidebarProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </SidebarProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
