import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Others from "./pages/Others";
import Login from "./pages/Login";
import Enquire from "./pages/Enquire";
import Admin from "./pages/Admin";
import Enquiries from "./pages/Enquiries"; // Admin Enquiries Page

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check localStorage for admin login on app load
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    setIsAdmin(adminLoggedIn);
  }, []);

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

  // Protected route for admin pages
  const ProtectedRoute = ({ children }) => {
    return isAdmin ? children : <Navigate to="/login" replace />;
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/others" element={<Others />} />
            <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
            <Route path="/enquire" element={<Enquire />} />

            {/* Admin Protected Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/enquiries"
              element={
                <ProtectedRoute>
                  <Enquiries />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
