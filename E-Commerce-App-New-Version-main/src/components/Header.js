import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Added dependency array []

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* logo */}
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img className="w-[40px]" src={Logo} alt="Logo" />
            <span className="font-bold hidden sm:block">EQUINOX</span>
          </div>
        </Link>

        <div className="flex gap-x-6 items-center">
          {/* Login Link - Corrected */}
          <Link to={"/login"} className="text-sm font-semibold hover:text-red-600 transition">
            Login
          </Link>

          {/* cart icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative group"
          >
            <BsBag className="text-2xl group-hover:scale-110 transition-transform" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;