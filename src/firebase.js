// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdXp6rFGImxXc0-9d2FW3ea0UYecRLJWw",
  authDomain: "vibrant-logicstics.firebaseapp.com",
  projectId: "vibrant-logicstics",
  storageBucket: "vibrant-logicstics.firebasestorage.app",
  messagingSenderId: "896378314695",
  appId: "1:896378314695:web:f7e4f77e9b7c1a6ac803e2",
  measurementId: "G-E6R2C3FVCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export app, auth, and db
export { app, auth, db };
