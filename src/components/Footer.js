import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#002147",
    color: "white",
    textAlign: "center",
    padding: "30px 15px",
    marginTop: "40px",
  };

  const buttonStyle = {
    background: "#ffb400",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold",
  };

  const addressStyle = {
    lineHeight: "1.6",
    marginTop: "10px",
    fontSize: "15px",
  };

  return (
    <footer style={footerStyle}>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        © 2025 Vibrant International Logistics
      </p>
      <div style={addressStyle}>
        <p>
          Office No. 4, 93 BLDG, Dana Bunder, Masjid East,<br />
          Opp. Gaumukh Hotel, Nandlal Jani Road,<br />
          Mumbai - 400001, Maharashtra
        </p>
        <p>
          📞 <a href="tel:+917304670169" style={{ color: "#ffb400", textDecoration: "none" }}>
            +91 73046 70169
          </a>
        </p>
      </div>
      <button
        style={buttonStyle}
        onClick={() => (window.location.href = "/enquire")}
      >
        Enquire Now
      </button>
    </footer>
  );
}
