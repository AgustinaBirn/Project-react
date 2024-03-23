// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL9fn6CXo0-TDGawQtSdsJdjPMwJz7-Jo",
  authDomain: "proyecto-react1-dc43e.firebaseapp.com",
  projectId: "proyecto-react1-dc43e",
  storageBucket: "proyecto-react1-dc43e.appspot.com",
  messagingSenderId: "1094506195090",
  appId: "1:1094506195090:web:48e2061d3ad97b53b3de4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
