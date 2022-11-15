// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKAQ60KwyhYVMI8ZIN-B4wV2fuVK26eU0",
  authDomain: "doctors-portal-6bcbb.firebaseapp.com",
  projectId: "doctors-portal-6bcbb",
  storageBucket: "doctors-portal-6bcbb.appspot.com",
  messagingSenderId: "130572075309",
  appId: "1:130572075309:web:d0c08d27c6ff2c094913a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;