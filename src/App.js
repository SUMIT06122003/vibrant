import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Others from "./pages/Others";
import Login from "./pages/Login";
import Enquire from "./pages/Enquire"; // NEW PAGE

export default function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/others" element={<Others />} />
            <Route path="/login" element={<Login />} />
            <Route path="/enquire" element={<Enquire />} /> {/* NEW ROUTE */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
