const usuario = localStorage.getItem("usuario");
if(!usuario){
  window.location="login.html";
}

document.getElementById("userInfo").innerText =
  "👤 Usuario: " + usuario;

window.onload = ()=>{
  ["banco","yasta"].forEach(id=>{
    const data = localStorage.getItem("qr_"+id);
    if(data){
      document.getElementById("img_"+id).src=data;
    }
  });
};

function subirQR(event,id){
  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
    localStorage.setItem("qr_"+id,e.target.result);
    alert("✅ QR actualizado correctamente");
  };
  reader.readAsDataURL(file);
}

function mostrarQR(id){
  const img=document.getElementById("img_"+id);
  img.style.display="block";
}

async function copiarQR(id){
  const img=document.getElementById("img_"+id);
  if(!img.src){
    alert("⚠️ Primero sube un QR");
    return;
  }

  const response = await fetch(img.src);
  const blob = await response.blob();

  await navigator.clipboard.write([
    new ClipboardItem({[blob.type]: blob})
  ]);

  alert("✅ QR copiado, pégalo en WhatsApp");
}

function whatsapp(banco){
  const msg = encodeURIComponent("Hola 👋 aquí está el QR de pago de "+banco);
  window.open("https://wa.me/?text="+msg,"_blank");
}

function logout(){
  localStorage.removeItem("usuario");
  window.location="login.html";
}
