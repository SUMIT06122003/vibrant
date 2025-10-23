import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAdmin, setIsAdmin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  // Detect window size for responsive menu
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAdmin(false);
    navigate("/login");
  };

  const navbar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#002147",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const logo = {
    height: "50px",
    cursor: "pointer",
  };

  const desktopMenu = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  const menuLink = {
    color: "white",
    textDecoration: "none",
    padding: "8px 0",
    fontWeight: "bold",
  };

  const menuButton = {
    display: isMobile ? "block" : "none",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1.8rem",
    cursor: "pointer",
  };

  const mobileMenu = {
    display: menuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#002147",
    padding: "15px",
    borderRadius: "5px",
    width: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <nav style={navbar}>
      {/* Logo */}
      <Link to="/">
        <img src="/logo.jpeg" alt="Vibrant International Logistics" style={logo} />
      </Link>

      {/* Desktop Menu */}
      {!isMobile && (
        <div style={desktopMenu}>
          {isAdmin ? (
            <>
              <span style={{ color: "#ffb400", fontWeight: "bold" }}>Welcome, Santosh</span>
              <Link to="/enquiries" style={menuLink}>Enquiries</Link>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" style={menuLink}>Home</Link>
              <Link to="/services" style={menuLink}>Services</Link>
              <Link to="/about" style={menuLink}>About Us</Link>
              <Link to="/others" style={menuLink}>Others</Link>
              <Link to="/login" style={menuLink}>Login</Link>
              <Link to="/enquire" style={menuLink}>Enquire Now</Link>
            </>
          )}
        </div>
      )}

      {/* Mobile Menu Button */}
      {isMobile && !isAdmin && (
        <button style={menuButton} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && !isAdmin && (
        <div style={mobileMenu}>
          <Link to="/" style={menuLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" style={menuLink} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" style={menuLink} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/others" style={menuLink} onClick={() => setMenuOpen(false)}>Others</Link>
          <Link to="/login" style={menuLink} onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/enquire" style={menuLink} onClick={() => setMenuOpen(false)}>Enquire Now</Link>
        </div>
      )}

      {/* Mobile Admin Menu */}
      {isMobile && isAdmin && (
        <div style={desktopMenu}>
          <span style={{ color: "#ffb400", fontWeight: "bold" }}>Welcome, Santosh</span>
          <Link to="/enquiries" style={menuLink}>Enquiries</Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
