import React, { useState, useContext } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
// Import the Context directly
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [sort, setSort] = useState(false);

  // Filter products directly in the render logic
  const filteredProducts = products.filter((item) => {
    if (sort) {
      return item.category === "electronics" || item.category === "jewelery";
    }
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {/* If products exist, show them. Otherwise show a clear error. */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="text-center text-xl">No products found in local data.</div>
          )}
        </div>

        <div className="flex justify-center my-10">
          <button
            className="px-8 py-3 bg-zinc-900 hover:bg-purple-600 text-white font-semibold rounded-full uppercase text-sm transition-all shadow-lg"
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