const left = document.querySelector(".arrowleft");
const right = document.querySelector(".arrowright");

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
