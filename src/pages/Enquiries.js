import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { app } from "../firebase"; // Make sure your firebase.js exports `app`
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check admin login
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (!adminLoggedIn) {
      navigate("/login"); // Redirect non-admin users
    }
  }, [navigate]);

  // Fetch enquiries from Firestore
  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "enquiries"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEnquiries(data);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete enquiry
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await deleteDoc(doc(db, "enquiries", id));
        setEnquiries(enquiries.filter(e => e.id !== id));
      } catch (err) {
        console.error("Error deleting enquiry:", err);
        alert("Failed to delete enquiry. Try again.");
      }
    }
  };

  const container = {
    maxWidth: "900px",
    margin: "60px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const card = {
    backgroundColor: "#f2f2f2",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    position: "relative",
  };

  const deleteButton = {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={container}>
      <h2 style={{ color: "#002147", marginBottom: "20px", textAlign: "center" }}>All Enquiries</h2>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p style={{ textAlign: "center" }}>No enquiries found.</p>
      ) : (
        enquiries.map((enquiry) => (
          <div key={enquiry.id} style={card}>
            <p><strong>Name:</strong> {enquiry.name}</p>
            <p><strong>Mobile:</strong> {enquiry.mobile}</p>
            <p><strong>Email:</strong> {enquiry.email}</p>
            <p><strong>Message/Quote:</strong> {enquiry.quote}</p>
            <p><small><strong>Submitted on:</strong> {new Date(enquiry.timestamp.seconds * 1000).toLocaleString()}</small></p>
            <button style={deleteButton} onClick={() => handleDelete(enquiry.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
