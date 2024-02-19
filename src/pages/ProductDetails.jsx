import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const products = useContext(ProductsContext);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(selectedItem));
  }, []);
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const selectedItem =
    products.find((item) => item.id == productId) ||
    JSON.parse(localStorage.getItem("product"));
  const { image, title, price, description } = selectedItem;
  return (
    <section className="min-h-screen grid place-content-center pt-32 pb-12 lg:py-32">
      {!selectedItem && <h1>Loading...</h1>}
      <div className="container gap-8 flex flex-col lg:flex-row justify-around items-center">
        <div className="flex-1 grid place-content-center">
          <img src={image} alt="img" className="max-w-[200px] lg:max-w-sm" />
        </div>
        <div className="flex-1 max-lg:text-center  ">
          <h1 className="text-2xl font-medium mb-2 max-w-[450px] max-lg:mx-auto">
            {title}
          </h1>
          <h3 className="text-xl font-medium mb-2">${price}</h3>
          <p className="text-lg mb-2">{description}</p>
          <button
            onClick={() => addToCart(selectedItem)}
            className="bg-primary text-white px-4 py-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
