import { useState } from "react";
import React from "react";
// import react router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import Home from "./pages/Home";
import ProjectInfo from './pages/ProjectInfo'; // Imported your new Info page
import ProductDetails from "./pages/ProductDetails";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  // Keeping token state for your login fix later
  const [token, setToken] = useState("");

  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          {/* Main Shop Page */}
          <Route path="/" element={<Home />} />
          
          {/* New Project Documentation Page (from README) */}
          <Route path="/project-info" element={<ProjectInfo />} />
          
          {/* Individual Product Page */}
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* Login Route (Kept as requested for future fixing) */}
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