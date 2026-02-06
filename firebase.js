// firebase.js (MODULAR)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhR3XZX9EG1sLuOvBefZ2EA5GVn8-SggQ",
  authDomain: "panel-jacknniel.firebaseapp.com",
  projectId: "panel-jacknniel",
  storageBucket: "panel-jacknniel.firebasestorage.app",
  messagingSenderId: "130186632575",
  appId: "1:130186632575:web:135d0352564c290d6d0e4a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
