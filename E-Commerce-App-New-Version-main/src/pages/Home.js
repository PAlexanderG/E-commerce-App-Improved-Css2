import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
// Import the local JSON file you created
import productsData from "../data/products.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    // Filter the local data immediately instead of fetching from the internet
    const filteredData = sort
      ? productsData.filter(item => 
          item.category === "electronics" || item.category === "jewelery"
        )
      : productsData.filter(item => 
          item.category === "men's clothing" || item.category === "women's clothing"
        );
    
    setProducts(filteredData);
  }, [sort]);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>

        {/* Dynamic Category Toggle Button */}
        <div className="flex justify-center my-10">
          <button
            className="px-8 py-3 bg-zinc-900 hover:bg-purple-600 text-white font-semibold rounded-full tracking-widest uppercase text-sm transition-all duration-300 shadow-lg shadow-zinc-200 active:scale-95"
            onClick={() => setSort(!sort)}
          >
            {sort ? "See Clothing Collection" : "Explore Electronics & Jewelry"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;