import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const container = {
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  };

  const heading = {
    textAlign: "center",
    color: "#002147",
    marginBottom: "30px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#f8f8f8",
  };

  const thStyle = {
    backgroundColor: "#002147",
    color: "white",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  // Fetch all enquiries
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "enquiries"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await deleteDoc(doc(db, "enquiries", id));
        setEnquiries(enquiries.filter((enquiry) => enquiry.id !== id));
      } catch (error) {
        console.error("Error deleting enquiry:", error);
      }
    }
  };

  return (
    <div style={container}>
      <h2 style={heading}>📋 Enquiries Dashboard</h2>
      {loading ? (
        <p>Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Mobile</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Quote / Message</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.mobile}</td>
                <td style={tdStyle}>{item.email}</td>
                <td style={tdStyle}>{item.quote}</td>
                <td style={tdStyle}>
                  {item.timestamp?.toDate
                    ? item.timestamp.toDate().toLocaleString()
                    : "N/A"}
                </td>
                <td style={tdStyle}>
                  <button style={buttonStyle} onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
