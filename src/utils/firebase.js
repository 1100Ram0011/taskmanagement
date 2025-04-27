// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanagement8424.firebaseapp.com",
  projectId: "taskmanagement8424",
  storageBucket: "taskmanagement8424.firebasestorage.app",
  messagingSenderId: "1068373194973",
  appId: "1:1068373194973:web:5ccbe1b4c5f8d380488334",
  measurementId: "G-2R287JZ49E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
