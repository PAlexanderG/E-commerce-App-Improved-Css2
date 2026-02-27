import { useState } from "react";
import React from "react";
// import react router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/login"
            element={
              <Login
                token={token}
                setToken={setToken}
                // username={username}
                // setUsername={setUsername}
              />
            }
          />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
