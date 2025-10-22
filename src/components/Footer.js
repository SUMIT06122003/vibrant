import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#002147",
    color: "white",
    textAlign: "center",
    padding: "20px 10px",
    marginTop: "40px",
  };

  const buttonStyle = {
    background: "#ffb400",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 Vibrant International Logistics</p>
      <button
        style={buttonStyle}
        onClick={() => window.location.href = "/enquire"}
      >
        Enquire Now
      </button>
    </footer>
  );
}
