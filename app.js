import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.login = function () {

  let email = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {

      const user = userCredential.user;

      localStorage.setItem("user", user.email);

      // ADMIN
      if (user.email === "admin@lan.com") {
        localStorage.setItem("rol", "admin");
      } else {
        localStorage.setItem("rol", "operador");
      }

      window.location.href = "panel.html";

    })
    .catch(() => {
      document.getElementById("msg").innerText =
        "❌ Usuario o contraseña incorrecta";
    });
};
