import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvcy1Yz2B-c9MxmS5XZ6NMQZ4kRuqsAnE",
  authDomain: "etec202402.firebaseapp.com",
  projectId: "etec202402",
  storageBucket: "etec202402.appspot.com",
  messagingSenderId: "972255155109",
  appId: "1:972255155109:web:7390ec34cae065f0ecce4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)