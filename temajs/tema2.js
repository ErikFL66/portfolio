const left = document.querySelector(".arrowleft");
const right = document.querySelector(".arrowright");
const prbtn = document.querySelector(".projekt-button");

// Tema knapper

left.addEventListener("click", tiltema1);

function tiltema1() {
  console.log("tiltema1");
  location.href = "tema1.html";
}

right.addEventListener("click", tiltema3);

function tiltema3() {
  console.log("tiltema3");
  location.href = "tema3.html";
}

// Færdigt projekt knap

prbtn.addEventListener("click", tilsite);

function tilsite() {
  console.log("tilsite");
  location.href = "https://erikfl66.github.io/website/index.html";
}
