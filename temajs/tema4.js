const left = document.querySelector(".arrowleft");
const right = document.querySelector(".arrowright");

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
