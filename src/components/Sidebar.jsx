import { useEffect, useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cartItems, clearCart, total, amount } = useContext(CartContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed w-full h-screen overflow-y-auto top-0 shadow-2xl md:w-[60vw] bg-white xl:max-w-[35vw] p-4 duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({amount})
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center items-center relative cursor-pointer w-8 h-8"
        >
          <IoMdArrowForward />
        </div>
      </div>
      <div className="flex flex-col gap-6 h-[520px] overflow-y-auto overflow-x-hidden">
        {cartItems.length === 0 && (
          <div className="grid place-content-center h-full">
            <h2>No items in the cart</h2>
          </div>
        )}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-3  py-4 mt-4">
        <div className="flex justify-between my-6 items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${total}
          </div>
          <div
            className="cursor-pointer py-4 w-12 h-12 grid place-content-center text-white bg-red-500 text-xl"
            onClick={() => clearCart()}
          >
            <FiTrash2 />
          </div>
        </div>

        <Link
          to="/ecommerse-website/"
          className="block w-full bg-gray-500 text-center text-white py-2 rounded-full"
        >
          View cart
        </Link>

        <Link
          to="/ecommerse-website/"
          className="block w-full text-center py-2.5 border bg-primary text-white rounded-full"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
