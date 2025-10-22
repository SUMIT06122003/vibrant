import React, { useEffect, useState } from "react";
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    // Animate hero after mount
    setTimeout(() => setHeroVisible(true), 200);
    // Animate cards slightly after hero
    setTimeout(() => setCardsVisible(true), 800);
  }, []);

  // Container with background image
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/logistics.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  // Hero heading
  const heading = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
    transform: heroVisible ? "translateY(0)" : "translateY(-50px)",
    opacity: heroVisible ? 1 : 0,
    transition: "all 0.8s ease",
  };

  // Hero subtext with typing effect
  const sub = {
    fontSize: "1.6rem",
    marginBottom: "30px",
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    transform: heroVisible ? "translateY(0)" : "translateY(-30px)",
    opacity: heroVisible ? 1 : 0,
    transition: "all 1s ease",
  };

  // CTA button
  const btn = {
    backgroundColor: "#ffb400",
    color: "#002147",
    border: "none",
    borderRadius: "5px",
    padding: "12px 25px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "600",
    marginBottom: "60px",
    opacity: heroVisible ? 1 : 0,
    transition: "opacity 1.2s ease",
  };

  // Services container
  const servicesContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "1200px",
    marginBottom: "50px",
  };

  // Individual service card with animation
  const card = (index) => ({
    backgroundColor: "white",
    color: "#002147",
    width: "250px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: `all 0.6s ease ${index * 0.2}s`,
    transform: cardsVisible ? "translateY(0)" : "translateY(30px)",
    opacity: cardsVisible ? 1 : 0,
    cursor: "pointer",
  });

  const cardTitle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "10px",
  };

  const cardText = {
    fontSize: "0.95rem",
    marginBottom: "15px",
    lineHeight: "1.4",
  };

  const readMoreBtn = {
    backgroundColor: "#002147",
    color: "#ffb400",
    border: "none",
    borderRadius: "4px",
    padding: "8px 15px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  // Services data
  const services = [
    {
      title: "International Freight Forwarding",
      text: "We simplify international shipping with door-to-door services and reliable contracts.",
      id: "forwarding",
    },
    {
      title: "Ocean Freight",
      text: "Full and less-than container loads, break bulk and project cargo transportation.",
      id: "freight",
    },
    {
      title: "Air Freight",
      text: "Secure and fast air shipping for general cargo, pharma, perishables, and charter operations.",
      id: "air",
    },
    {
      title: "Customs Brokerage",
      text: "Efficient customs clearance, documentation, duties, and compliance management.",
      id: "customs",
    },
    {
      title: "Transportation & Distribution",
      text: "Domestic trucking, last-mile delivery, and multimodal transport solutions.",
      id: "transport",
    },
  ];

  // Redirect to service page
  const goToService = (id) => {
    window.location.href = "/services#" + id;
  };

  return (
    <div style={container}>
      <h1 style={heading}>Vibrant International Logistics</h1>
      <p style={sub}>
        We provide <TypingEffect />
      </p>
      <button
        style={btn}
        onClick={() => window.location.href = "/services"}
      >
        Explore All Services
      </button>

      {/* Services Cards */}
      <div style={servicesContainer}>
        {services.map((service, i) => (
          <div
            key={i}
            style={card(i)}
            onClick={() => goToService(service.id)}
          >
            <div>
              <div style={cardTitle}>{service.title}</div>
              <div style={cardText}>{service.text}</div>
            </div>
            <button style={readMoreBtn}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
