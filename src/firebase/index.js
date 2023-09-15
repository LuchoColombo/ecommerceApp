import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-X3ita2aGfemQF8NXDrCcaKyX49fL2TQ",
  authDomain: "ecommerce-app-coder-5862d.firebaseapp.com",
  projectId: "ecommerce-app-coder-5862d",
  storageBucket: "ecommerce-app-coder-5862d.appspot.com",
  messagingSenderId: "379811097734",
  appId: "1:379811097734:web:1f7c199f9dfa3717bd3507",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 