const left = document.querySelector(".arrowleft");
const right = document.querySelector(".arrowright");
const prbtn = document.querySelector(".projekt-button");

// Tema knapper

left.addEventListener("click", tiltema2);

function tiltema2() {
  console.log("tiltema2");
  location.href = "tema2.html";
}

right.addEventListener("click", tiltema4);

function tiltema4() {
  console.log("tiltema4");
  location.href = "tema4.html";
}

// Færdigt projekt knap
const heroimg = document.querySelector(".temaheroimg");
heroimg.addEventListener("click", tilsite);
prbtn.addEventListener("click", tilsite);

function tilsite() {
  console.log("tilsite");
  location.href = "https://erikfl66.github.io/tenderyouth/index.html";
}
