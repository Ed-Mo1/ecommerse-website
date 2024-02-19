import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
const Header = () => {
  const [ isActive, setIsActive ] = useState(false);
  const { setIsOpen } = useContext(SidebarContext);
  const { amount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all ${isActive ? "bg-white py-4 shadow-md" : "py-6 bg-none"}`}
    >
      <div className="container flex justify-between items-center">
        <Link to={"/ecommerce-website/"}>
          <div>
            <img src={Logo} width={40} alt="log" />
          </div>
        </Link>
        <div
          className="flex cursor-pointer relative w-fit"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <BsBag className="text-2xl" />

          <div className="absolute -bottom-1 -right-2 w-[18px] h-[18px] rounded-full bg-red-600 grid place-content-center text-white text-xs">
            {amount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
