function login() {

  let email = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      window.location.href = "panel.html";
    })
    .catch(() => {
      document.getElementById("msg").innerText =
        "❌ Usuario o contraseña incorrecta";
    });
}
