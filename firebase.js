// 🔥 Firebase Configuración Oficial

const firebaseConfig = {
  apiKey: "AIzaSyDhR3XZX9EG1sLuOvBefZ2EA5GVn8-SggQ",
  authDomain: "panel-jacknniel.firebaseapp.com",
  projectId: "panel-jacknniel",
  storageBucket: "panel-jacknniel.firebasestorage.app",
  messagingSenderId: "130186632575",
  appId: "1:130186632575:web:135d0352564c290d6d0e4a"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Activar servicios
const auth = firebase.auth();
const db = firebase.firestore();
