import React from "react";

export default function About() {
  const aboutStyle = {
    padding: "30px 20px",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
    textAlign: "center",
  };

  return (
    <div style={aboutStyle}>
      <h2>About Us</h2>
      <p>
        Vibrant International Logistics is a global logistics company committed
        to providing seamless freight forwarding, customs brokerage, and
        transportation solutions for businesses across the world.  
        <br /><br />
        With years of experience and a strong global network, we ensure smooth
        and timely deliveries, no matter the destination.
      </p>
    </div>
  );
}
