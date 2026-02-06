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
