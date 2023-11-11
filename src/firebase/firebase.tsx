// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyM5UOMp7QdJhath__l1uaS0OV37iJcM4",
  authDomain: "solnascente-app.firebaseapp.com",
  projectId: "solnascente-app",
  storageBucket: "solnascente-app.appspot.com",
  messagingSenderId: "408710082734",
  appId: "1:408710082734:web:58efb3f3d9f9fb5fb23d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);