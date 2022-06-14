
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA4U_jw7uIML_AQj3sT3ctVz3t-dNMhIPQ",
  authDomain: "mini-blog-a796b.firebaseapp.com",
  projectId: "mini-blog-a796b",
  storageBucket: "mini-blog-a796b.appspot.com",
  messagingSenderId: "1004466676833",
  appId: "1:1004466676833:web:8603b187a4dc09f7797620"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database }
