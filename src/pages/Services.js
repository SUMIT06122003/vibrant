import React from "react";

export default function Services() {
  const container = {
    padding: "50px 20px",
    backgroundColor: "#f8f9fa",
    color: "#222",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
  };

  const title = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#002147",
    marginBottom: "40px",
  };

  const grid = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "50px",
  };

  const card = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const cardIcon = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#ffb400",
  };

  const cardTitle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#002147",
  };

  const section = {
    maxWidth: "1000px",
    margin: "0 auto 40px auto",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  };

  const heading = {
    color: "#004aad",
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const paragraph = {
    fontSize: "1rem",
    textAlign: "justify",
    marginBottom: "15px",
  };

  // Scroll to section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={container}>
      <h1 style={title}>Our Services</h1>

      {/* Summary Grid */}
      <div style={grid}>
        <div
          style={card}
          onClick={() => scrollTo("freight")}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <div style={cardIcon}>🚢</div>
          <div style={cardTitle}>Ocean Freight</div>
        </div>
        <div
          style={card}
          onClick={() => scrollTo("air")}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <div style={cardIcon}>✈️</div>
          <div style={cardTitle}>Air Freight</div>
        </div>
        <div
          style={card}
          onClick={() => scrollTo("customs")}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <div style={cardIcon}>🧾</div>
          <div style={cardTitle}>Customs Brokerage</div>
        </div>
        <div
          style={card}
          onClick={() => scrollTo("transport")}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <div style={cardIcon}>🚛</div>
          <div style={cardTitle}>Transportation</div>
        </div>
        <div
          style={card}
          onClick={() => scrollTo("forwarding")}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <div style={cardIcon}>🌐</div>
          <div style={cardTitle}>International Freight</div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div id="forwarding" style={section}>
        <h2 style={heading}>International Freight Forwarding</h2>
        <p style={paragraph}>
          There’s a lot to consider when shipping goods internationally. Our
          long-term service contracts with shipping lines and international
          airlines, combined with door-to-door services under one roof, make us
          competitive, reliable, and contribute to overall customer
          satisfaction.
        </p>
        <p style={paragraph}>
          Our goal is to make international shipping as easy as possible for you
          and your business. With our highly experienced staff, we’ve got what it
          takes to get the job done right.
        </p>
      </div>

      <div id="freight" style={section}>
        <h2 style={heading}>Ocean Freight</h2>
        <p style={paragraph}>
          Vibrant International Logistics offers a full array of ocean freight
          services. Through a robust network of connections with ocean carriers,
          we deliver reliable and economical ocean freight solutions.
        </p>
        <p style={paragraph}>
          We cover all conventional cargo transportation, including Full
          Container Load (FCL), Less than Container Load (LCL), Break Bulk, and
          Project cargo.
        </p>
      </div>

      <div id="air" style={section}>
        <h2 style={heading}>Air Freight</h2>
        <p style={paragraph}>
          As an IATA agent, we provide a complete suite of air freight services –
          from pick-up at origin, consolidation, customs clearance, to delivery
          to end customers.
        </p>
        <p style={paragraph}>
          We handle a wide range of cargo types such as General Cargo, Pharma
          and Cold Chain Cargo, Dangerous Goods, Perishables, Odd Sized Cargo,
          and Full or Part Charter Operations.
        </p>
      </div>

      <div id="customs" style={section}>
        <h2 style={heading}>Customs Brokerage</h2>
        <p style={paragraph}>
          Our professional customs brokerage team ensures smooth, efficient
          clearance of goods at all ports. We manage document preparation,
          duties, and compliance with international trade regulations, reducing
          your time and cost.
        </p>
      </div>

      <div id="transport" style={section}>
        <h2 style={heading}>Transportation & Distribution</h2>
        <p style={paragraph}>
          We provide domestic trucking, last-mile delivery, and multimodal
          transport. Our reliable partners and advanced tracking ensure your
          cargo reaches its destination on time, every time.
        </p>
      </div>
    </div>
  );
}
