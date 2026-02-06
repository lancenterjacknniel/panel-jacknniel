
const whatsappNumber="59160772546";

const linksDefault={
  banco:"https://drive.google.com/uc?export=view&id=1-6Exete5RXO6VMUqu-UE1Afn9CQCG-RS",
  yasta:"https://drive.google.com/uc?export=view&id=1xx_AquEodZ6cDm2lt8bRTPPAnz5EWrQO"
};

function cargarLinks(){
  document.getElementById("imgBanco").src=localStorage.getItem("banco")||linksDefault.banco;
  document.getElementById("imgYasta").src=localStorage.getItem("yasta")||linksDefault.yasta;
}

function toggleQR(id){
  let box=document.getElementById(id);
  box.style.display=(box.style.display==="block")?"none":"block";
}

async function copiarImagen(imgId){
  const img=document.getElementById(imgId);
  const response=await fetch(img.src);
  const blob=await response.blob();
  await navigator.clipboard.write([new ClipboardItem({[blob.type]:blob})]);
  alert("✅ QR copiado, pega en WhatsApp");
}

function enviarWhats(){
  window.open("https://wa.me/"+whatsappNumber,"_blank");
}

function guardarLink(tipo){
  let inputId=(tipo==="banco")?"linkBanco":"linkYasta";
  let val=document.getElementById(inputId).value;

  if(val.includes("drive.google.com")){
    let id=val.split("/d/")[1].split("/")[0];
    let link="https://drive.google.com/uc?export=view&id="+id;
    localStorage.setItem(tipo,link);
    cargarLinks();
    alert("✅ QR actualizado");
  }
}

window.onload=function(){
  let rol=localStorage.getItem("rol");
  document.getElementById("rol").innerText="Rol: "+rol;

  cargarLinks();

  if(rol==="admin"){
    document.getElementById("adminBanco").style.display="block";
    document.getElementById("adminYasta").style.display="block";
  }
};
