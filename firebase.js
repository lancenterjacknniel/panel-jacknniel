// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// CONFIG REAL DE TU PROYECTO
const firebaseConfig = {
  apiKey: "AIzaSyDhR3XZX9EG1sLuOvBefZ2EA5GVn8-SggQ",
  authDomain: "panel-jacknniel.firebaseapp.com",
  projectId: "panel-jacknniel",
  storageBucket: "panel-jacknniel.firebasestorage.app",
  messagingSenderId: "130186632575",
  appId: "1:130186632575:web:135d0352564c290d6d0e4a",
  measurementId: "G-1QBZ9BNNLT"
};

// INICIAR FIREBASE
const app = initializeApp(firebaseConfig);

// BASE DE DATOS FIRESTORE
export const db = getFirestore(app);
