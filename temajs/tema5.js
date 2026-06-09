const left = document.querySelector(".arrowleft");
const prbtn = document.querySelector(".projekt-button");
// Tema knapper

left.addEventListener("click", tiltema4);

function tiltema4() {
  console.log("tiltema4");
  location.href = "tema4.html";
}

// Færdigt projekt knap

prbtn.addEventListener("click", tilsite);

function tilsite() {
  console.log("tilsite");
  location.href = "https://carolinehay.github.io/Tanken_done/";
}
