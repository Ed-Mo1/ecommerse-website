import { useState } from "react";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, title, price, category, image } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="border border-gray-200 h-[300px] mb-4 relative overflow-hidden group transition-all">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt="IMAGE"
              className="max-h-[160px] group-hover:scale-110 transition-all"
            />
          </div>
          <div className="absolute top-6 -right-11  group-hover:right-5  p-2 flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div
                onClick={() => addToCart(product)}
                className="flex justify-center items-center bg-red-500 text-white w-12 h-12"
              >
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/ecommerse-website/product/${id}`}
              className="w-12 h-12 bg-white text-primary drop-shadow-xl flex justify-center items-center"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize mb-1 text-gray-500">{category}</div>
        <Link to={`/ecommerse-website/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default Product;
