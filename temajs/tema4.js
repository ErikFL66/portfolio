const left = document.querySelector(".arrowleft");
const right = document.querySelector(".arrowright");
const prbtn = document.querySelector(".projekt-button");

// Tema knapper

left.addEventListener("click", tiltema3);

function tiltema3() {
  console.log("tiltema3");
  location.href = "tema3.html";
}

right.addEventListener("click", tiltema5);

function tiltema5() {
  console.log("tiltema5");
  location.href = "tema5.html";
}

// Færdigt projekt knap
const heroimg = document.querySelector(".temaheroimg");
heroimg.addEventListener("click", tilsite);
prbtn.addEventListener("click", tilsite);

function tilsite() {
  console.log("tilsite");
  location.href = "https://erikfl66.github.io/emergency_2/";
}
