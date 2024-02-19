import { useState, createContext, useEffect } from "react";
const base = "https://fakestoreapi.com/products";
export const ProductsContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(base)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
