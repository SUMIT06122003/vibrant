import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase"; // make sure your firebase.js exports `app`

const db = getFirestore(app);

export default function Enquire() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [quote, setQuote] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const container = {
    padding: "40px 20px",
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  };

  const heading = {
    textAlign: "center",
    fontSize: "2rem",
    color: "#002147",
    marginBottom: "30px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#002147",
    color: "#ffb400",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!name || !mobile || !email || !quote) {
      setError("Please fill all fields");
      return;
    }
    try {
      await addDoc(collection(db, "enquiries"), {
        name,
        mobile,
        email,
        quote,
        timestamp: new Date(),
      });
      setSuccess("Enquiry submitted successfully!");
      setName("");
      setMobile("");
      setEmail("");
      setQuote("");
    } catch (err) {
      setError("Failed to submit enquiry. Try again.");
      console.error(err);
    }
  };

  return (
    <div style={container}>
      <h2 style={heading}>Enquire Now</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          style={{ ...inputStyle, height: "120px" }}
          placeholder="Your Quote / Message"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>
          Submit Enquiry
        </button>
      </form>
      {success && <p style={{ color: "green", marginTop: "15px" }}>{success}</p>}
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
    </div>
  );
}
