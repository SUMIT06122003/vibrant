import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const container = {
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "80%",
    maxWidth: "320px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#002147",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Hardcoded admin credentials
    const adminEmail = "santosh@vibrantinternationallogistics.com";
    const adminPassword = "Santosh@1245";

    if (email === adminEmail && password === adminPassword) {
      // Save login in localStorage
      localStorage.setItem("adminLoggedIn", "true");
      // Update Navbar state
      setIsAdmin(true);
      // Redirect to admin dashboard
      navigate("/admin");
    } else {
      setError("Invalid admin credentials. Try again.");
    }
  };

  return (
    <div style={container}>
      <h2 style={{ color: "#002147" }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <br />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}
