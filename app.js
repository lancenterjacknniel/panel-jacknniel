const firebaseConfig = {
  apiKey: "AIzaSyDhR3XZX9EG1sLuOvBefZ2EA5GVn8-SggQ",
  authDomain: "panel-jacknniel.firebaseapp.com",
  projectId: "panel-jacknniel",
  storageBucket: "panel-jacknniel.firebasestorage.app",
  messagingSenderId: "130186632575",
  appId: "1:130186632575:web:135d0352564c290d6d0e4a",
  measurementId: "G-1QBZ9BNNLT"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function login(){
  let u=document.getElementById("user").value;
  let p=document.getElementById("pass").value;

  if(usuarios[u] && usuarios[u].pass===p){
    localStorage.setItem("user",u);
    localStorage.setItem("rol",usuarios[u].rol);
    window.location="panel.html";
  } else {
    document.getElementById("msg").innerText="❌ Usuario o clave incorrecta";
  }
}
