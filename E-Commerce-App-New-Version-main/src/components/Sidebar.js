import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  // Memoize the total to prevent recalculation on unrelated renders
  const totalDisplay = useMemo(() => (price * amount).toFixed(2), [price, amount]);

  return (
    <div className="flex gap-x-4 py-4 lg:px-6 border-b border-gray-100 w-full font-light text-gray-500 hover:bg-gray-50/50 transition-colors">
      <div className="w-full min-h-[100px] flex items-center gap-x-4">
        
        {/* Image - Added a subtle border and hover scale */}
        <Link to={`/product/${id}`} className="group shrink-0">
          <img 
            className="max-w-[70px] rounded-lg group-hover:scale-105 transition-transform duration-300" 
            src={image} 
            alt={title} 
          />
        </Link>

        <div className="w-full flex flex-col justify-center">
          {/* Title & Remove Icon */}
          <div className="flex justify-between items-start mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-semibold max-w-[240px] text-primary hover:text-purple-600 transition-colors leading-tight"
            >
              {title}
            </Link>
            
            {/* Remove Button - Proper Accessibility */}
            <button
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer text-gray-400 hover:text-red-500 transition-colors p-1"
              aria-label="Remove item."
            >
              <IoMdClose />
            </button>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm items-center">
            {/* Quantity Selector - Styled as a cohesive unit */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <IoMdRemove />
              </button>
              
              <div className="h-full flex justify-center items-center px-2 font-medium text-primary">
                {amount}
              </div>

              <button
                onClick={() => increaseAmount(id)}
                className="flex-1 flex justify-center items-center h-full hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity."
              >
                <IoMdAdd />
              </button>
            </div>

            {/* Item Price */}
            <div className="flex-1 flex items-center justify-around text-gray-400">
              $ {price.toFixed(2)}
            </div>

            {/* Final Price for this item */}
            <div className="flex-1 flex justify-end items-center text-primary font-bold">
              $ {totalDisplay}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
