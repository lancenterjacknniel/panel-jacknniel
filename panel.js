import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ROL
const rol = localStorage.getItem("rol");

document.getElementById("rolText").innerText =
  "Rol: " + rol;

// OCULTAR ADMIN SI NO ES ADMIN
if (rol !== "admin") {
  document.getElementById("adminPanel").style.display = "none";
}

// GUARDAR QR (SOLO ADMIN)
window.guardarQR = async function (banco) {

  if (rol !== "admin") {
    alert("❌ No autorizado");
    return;
  }

  let inputID = banco === "banco_union" ? "linkBanco" : "linkYasta";
  let url = document.getElementById(inputID).value;

  await setDoc(doc(db, "qr_links", banco), { url });

  alert("✅ QR actualizado");
};

// VER QR (TODOS)
window.verQR = async function (banco) {

  const snap = await getDoc(doc(db, "qr_links", banco));

  if (!snap.exists()) {
    alert("❌ No hay QR guardado");
    return;
  }

  let url = snap.data().url;

  // Drive directo
  if (url.includes("drive.google.com")) {
    let id = url.split("/d/")[1].split("/")[0];
    url = `https://drive.google.com/uc?export=view&id=${id}`;
  }

  let imgID = banco === "banco_union" ? "imgBanco" : "imgYasta";

  document.getElementById(imgID).src = url;
};
