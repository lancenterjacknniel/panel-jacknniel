// 🔥 Mostrar usuario y rol
document.addEventListener("DOMContentLoaded", () => {

  let user = localStorage.getItem("user");
  let rol = localStorage.getItem("rol");

  // Si no hay login → volver
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Mostrar arriba
  document.getElementById("infoUser").innerText =
    `Usuario: ${user} | Rol: ${rol}`;

  // Solo admin ve panel subir
  if (rol === "admin") {
    document.getElementById("adminPanel").style.display = "block";
  } else {
    document.getElementById("adminPanel").style.display = "none";
  }
});


// ✅ Guardar link QR en Firestore
function guardarQR(tipo) {

  let inputID = tipo === "banco_union" ? "linkBanco" : "linkYasta";
  let link = document.getElementById(inputID).value.trim();

  if (link === "") {
    alert("❌ Pega un link Drive primero");
    return;
  }

  db.collection("qr_links").doc(tipo).set({
    url: link
  })
  .then(() => {
    alert("✅ QR Guardado correctamente");
  })
  .catch(() => {
    alert("❌ Error guardando en Firestore");
  });
}


// ✅ Ver QR desde Firestore
function verQR(tipo) {

  db.collection("qr_links").doc(tipo).get()
    .then((doc) => {

      if (!doc.exists) {
        alert("❌ No hay QR guardado todavía");
        return;
      }

      let url = doc.data().url;

      // Convertir link Drive → imagen directa
      let fileID = url.split("/d/")[1].split("/")[0];
      let finalURL = `https://drive.google.com/uc?export=view&id=${fileID}`;

      // Mostrar imagen
      if (tipo === "banco_union") {
        document.getElementById("imgBanco").src = finalURL;
      } else {
        document.getElementById("imgYasta").src = finalURL;
      }

    })
    .catch(() => {
      alert("❌ Error cargando QR");
    });
}


// ✅ Salir
function salir() {
  localStorage.clear();
  window.location.href = "login.html";
}
