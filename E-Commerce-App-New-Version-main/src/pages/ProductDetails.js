import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // 1. Get product id from the URL
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // 2. Loading State
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="animate-pulse text-xl font-medium">Loading Product...</div>
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        
        {/* BACK TO HOME LINK */}
        <Link 
          to="/" 
          className="inline-block mb-10 text-zinc-500 hover:text-black transition-colors font-medium flex items-center gap-2"
        >
          <span>←</span> Back to Home
        </Link>

        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-x-12">
          
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img 
              className="max-w-[200px] lg:max-w-sm hover:scale-105 transition-transform duration-500" 
              src={image} 
              alt={title} 
            />
          </div>

          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] md:text-[32px] font-bold mb-4 max-w-[500px] mx-auto lg:mx-0 text-zinc-900 leading-tight">
              {title}
            </h1>
            
            <div className="text-2xl text-red-500 font-semibold mb-6">
              $ {parseFloat(price).toFixed(2)}
            </div>

            <p className="mb-10 text-gray-600 leading-relaxed max-w-[600px]">
              {description}
            </p>

            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-zinc-900 py-4 px-10 text-white font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
            >
              Add to cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;