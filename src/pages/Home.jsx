import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  const products = useContext(ProductsContext);
  const filteredProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );
  return (
    <>
    <Hero/>
    <section className="py-[5rem]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-auto md:mx-0 xl:grid-cols-5 gap-6 max-w-sm md:max-w-none">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
