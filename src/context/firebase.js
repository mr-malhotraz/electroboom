// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM7xtU2cMDIKbKaDfLkXrfqB5kGEVxth0",
  authDomain: "electroboom-44995.firebaseapp.com",
  projectId: "electroboom-44995",
  storageBucket: "electroboom-44995.appspot.com",
  messagingSenderId: "997835859524",
  appId: "1:997835859524:web:bc2bf2981ad3e7ac63fe11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
