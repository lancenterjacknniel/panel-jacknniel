auth.onAuthStateChanged(user => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Solo admin ve subir links
  if (user.email !== "admin@gmail.com") {
    document.getElementById("adminPanel").style.display = "none";
  }
});


// Guardar link en Firestore
function guardarQR(tipo) {

  let link = "";

  if (tipo === "banco_union") link = document.getElementById("linkBanco").value;
  if (tipo === "yasta") link = document.getElementById("linkYasta").value;

  db.collection("qr_links").doc(tipo).set({
    url: link
  });

  alert("✅ Link guardado correctamente");
}


// Mostrar QR para operadores
function verQR(tipo) {

  db.collection("qr_links").doc(tipo).get()
    .then(doc => {

      if (!doc.exists) return alert("No hay link guardado");

      let url = doc.data().url;

      // Convertir Drive a link directo
      let directo = url.replace("view?usp=sharing", "uc?export=view");

      if (tipo === "banco_union") {
        document.getElementById("imgBanco").src = directo;
      }

      if (tipo === "yasta") {
        document.getElementById("imgYasta").src = directo;
      }

    });
}
