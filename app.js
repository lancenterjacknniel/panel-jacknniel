// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDhR3XZX9EG1sLuOvBefZ2EA5GVn8-SggQ",
  authDomain: "panel-jacknniel.firebaseapp.com",
  projectId: "panel-jacknniel",
  storageBucket: "panel-jacknniel.firebasestorage.app",
  messagingSenderId: "130186632575",
  appId: "1:130186632575:web:135d0352564c290d6d0e4a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ✅ LOGIN
function login() {
  let u = document.getElementById("user").value.trim();
  let p = document.getElementById("pass").value.trim();

  if (usuarios[u] && usuarios[u].pass === p) {
    localStorage.setItem("rol", usuarios[u].rol);
    window.location = "panel.html";
  } else {
    document.getElementById("msg").innerText =
      "❌ Usuario o contraseña incorrecta";
  }
}

// ✅ PANEL CARGA
window.onload = async function () {

  if (!window.location.href.includes("panel.html")) return;

  let rol = localStorage.getItem("rol");

  document.getElementById("rolText").innerText =
    "Rol: " + rol;

  if (rol !== "admin") {
    document.querySelectorAll(".adminOnly").forEach(el => el.style.display = "none");
  }

  cargarLinks();
};

// ✅ GUARDAR LINK DRIVE
async function guardarLink(tipo) {

  let link = "";

  if (tipo === "banco_union") link = document.getElementById("linkBanco").value;
  if (tipo === "yasta") link = document.getElementById("linkYasta").value;

  await db.collection("qr_links").doc(tipo).set({
    url: link
  });

  alert("✅ QR guardado correctamente");
  cargarLinks();
}

// ✅ CARGAR LINKS
async function cargarLinks() {

  const bancoDoc = await db.collection("qr_links").doc("banco_union").get();
  const yastaDoc = await db.collection("qr_links").doc("yasta").get();

  if (bancoDoc.exists) {
    document.getElementById("imgBanco").src = bancoDoc.data().url;
  }

  if (yastaDoc.exists) {
    document.getElementById("imgYasta").src = yastaDoc.data().url;
  }
}

// ✅ MOSTRAR QR
function mostrarQR(id) {
  let box = document.getElementById(id);

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

// ✅ COPIAR QR
async function copiarImagen(imgId) {
  const img = document.getElementById(imgId);

  const response = await fetch(img.src);
  const blob = await response.blob();

  await navigator.clipboard.write([
    new ClipboardItem({ [blob.type]: blob })
  ]);

  alert("✅ QR copiado, ahora puedes pegarlo en WhatsApp");
}

// ✅ WHATSAPP
function whatsappBanco() {
  window.open("https://wa.me/60772546?text=Banco%20Unión%20QR");
}

function whatsappYasta() {
  window.open("https://wa.me/60772546?text=Yasta%20QR");
}
