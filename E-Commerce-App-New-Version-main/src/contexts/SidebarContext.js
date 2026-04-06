import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// Components
import CartItem from "../components/CartItem";
// Contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px] flex flex-col`}
    >
      {/* 1. Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* Close Icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center hover:scale-110 transition-transform"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* 2. Cart Items (Scrollable Area) */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <p>Your bag is empty</p>
          </div>
        )}
      </div>

      {/* 3. Footer (Fixed at Bottom) */}
      <div className="flex flex-col gap-y-3 py-4 mt-4 border-t">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart Icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded shadow-md hover:bg-red-600 transition-all"
          >
            <FiTrash2 />
          </div>
        </div>
        
        <Link 
          to="/" 
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium hover:bg-gray-300 transition-all"
        >
          View Cart
        </Link>
        <button 
          className="bg-black flex p-4 justify-center items-center text-white w-full font-medium hover:bg-zinc-800 transition-all uppercase tracking-widest text-sm"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;