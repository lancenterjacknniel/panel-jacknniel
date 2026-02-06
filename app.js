function login() {

  let email = document.getElementById("user").value;
  let pass  = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(email, pass)

    .then(() => {
      localStorage.setItem("email", email);
      window.location.href = "panel.html";
    })

    .catch(() => {
      document.getElementById("msg").innerText =
        "❌ Usuario o contraseña incorrectos";
    });
}
