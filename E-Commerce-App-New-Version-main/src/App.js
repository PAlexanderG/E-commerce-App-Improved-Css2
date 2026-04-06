import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProjectInfo from './pages/ProjectInfo';
import ProductDetails from "./pages/ProductDetails";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

// Context Providers - These are the "Data Sources"
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import SidebarProvider from "./contexts/SidebarContext";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="overflow-hidden">
      {/* 🛡️ All Providers must wrap the Router so every page can see the data */}
      <ProductProvider>
        <SidebarProvider>
          <CartProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-info" element={<ProjectInfo />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route
                  path="/login"
                  element={
                    <Login
                      token={token}
                      setToken={setToken}
                    />
                  }
                />
              </Routes>
              <Sidebar />
              <Footer />
            </Router>
          </CartProvider>
        </SidebarProvider>
      </ProductProvider>
    </div>
  );
};

export default App;