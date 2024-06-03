// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbP4HzChNZ-SjGHeyoJ9jXC8UFJBQ1aok",
  authDomain: "financetrackernxtjs.firebaseapp.com",
  projectId: "financetrackernxtjs",
  storageBucket: "financetrackernxtjs.appspot.com",
  messagingSenderId: "350008660183",
  appId: "1:350008660183:web:e72f958d472f27ba782092",
  measurementId: "G-P53BTFTF73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
