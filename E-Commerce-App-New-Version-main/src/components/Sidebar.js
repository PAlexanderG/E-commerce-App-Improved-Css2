import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// Import your CartItem and Contexts
import CartItem from "../components/CartItem";
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
      {/* Sidebar Header */}
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

      {/* Cart Items List - scrollable area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="flex flex-col gap-y-3 py-4 mt-4 border-t">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded-md hover:bg-red-600 transition-colors"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link 
          to="/" 
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium hover:bg-gray-300 transition-colors"
        >
          View Cart
        </Link>
        <Link 
          to="/" 
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium hover:bg-zinc-800 transition-colors"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;