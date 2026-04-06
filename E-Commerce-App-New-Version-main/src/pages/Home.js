import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        
        let filteredData = [];
        if (sort) {
          // Categories: Electronics & Jewelry
          filteredData = data.filter(item => 
            item.category === "electronics" || item.category === "jewelery"
          );
        } else {
          // Categories: Clothing
          filteredData = data.filter(item => 
            item.category === "men's clothing" || item.category === "women's clothing"
          );
        }
        setProducts(filteredData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchProducts();
  }, [sort]);

  const toggleSort = () => setSort(!sort);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products && products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>

        {/* Dynamic Button Text */}
        <div className="flex justify-center my-10">
          <button
            className="px-8 py-3 bg-zinc-900 hover:bg-purple-600 text-white font-semibold rounded-full tracking-widest uppercase text-sm transition-all duration-300 shadow-lg"
            onClick={toggleSort}
          >
            {sort ? "See Clothing Collection" : "Explore Electronics & Jewelry"}
          </button>
        </div>

        {/* Login Section remains the same */}
        {/* ... */}
      </section>
    </div>
  );
};

export default Home;