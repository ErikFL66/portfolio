const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menup = document.querySelector(".menu-p");
const menuprojekt = document.querySelector(".menuprojekt");
const starprojekt = document.querySelector(".starprojekt");
const menuommig = document.querySelector(".menuommig");
const starom = document.querySelector(".starom");
const totop = document.querySelector(".totopimg");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// Projekt stjerne ind og ud
menuprojekt.style.cursor = "pointer";

menuprojekt.addEventListener("click", projektlink);
function projektlink() {
  console.log("projektlink");
  location.href = "projekt.html";
}

menuprojekt.addEventListener("mouseover", menuhoverstarprojekt);

function menuhoverstarprojekt() {
  console.log("menuhoverstarprojekt");
  starprojekt.classList.remove("menustaractive");
}

menuprojekt.addEventListener("mouseout", menuhoverstarprojektout);

function menuhoverstarprojektout() {
  console.log("menuhoverstarprojektout");
  starprojekt.classList.add("menustaractive");
}
// om mig stjerne ind og ud

menuommig.style.cursor = "pointer";

menuommig.addEventListener("click", ommiglink);
function ommiglink() {
  console.log("ommiglink");
  location.href = "ommig.html";
}

menuommig.addEventListener("mouseover", menuhoverstarommig);
function menuhoverstarommig() {
  console.log("menuhoverstarommig");
  starom.classList.remove("menustaractive");
}

menuommig.addEventListener("mouseout", menuhoverstarommigout);
function menuhoverstarommigout() {
  console.log("menuhoverstarommigout");
  starom.classList.add("menustaractive");
}

// go to top star

totop.style.cursor = "pointer";

totop.addEventListener("click", totoplink);
function totoplink() {
  console.log("ommiglink");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
