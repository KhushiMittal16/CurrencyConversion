// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: "currency-converter--datewise",
  storageBucket: "currency-converter--datewise.firebasestorage.app",
  messagingSenderId: import.meta.env.FIREBASE_SENDER_ID,
  appId: "1:769840287160:web:b96ea9e54f7451b0bf534d",
  measurementId: "G-9VWXXT5Y4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
