import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { decreaseAmount, removeFromCart, increaseAmount } =
    useContext(CartContext);
  const { id, amount, title, price, image } = item;
  return (
    <div className="flex gap-x-2  py-2 border-b border-gray-200 w-full text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-4">
        <Link to={`/ecommerce-website/product/${id}`}>
          <img src={image} alt="image" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <Link
              to={`/ecommerce-website/product/${id}`}
              className="text-sm font-medium uppercase  max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)}>
              <IoMdClose className="text-xl cursor-pointer text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-2 h-[36px] text-sm justify-between items-center">
            <div className="flex flex-1 max-w-[100px] items-center justify-between border text-primary h-full font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 grid place-content-center  cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="flex-1 grid place-content-center h-full px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 grid place-content-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 flex flex-1 justify-center items-center">
              $ {price}
            </p>
            <p className="text-sm font-medium text-gray-500 flex flex-1 justify-end items-center">
              ${parseFloat(price * amount).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
