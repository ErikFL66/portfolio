const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menup = document.querySelector(".menu-p");
const menuprojekt = document.querySelector(".menuprojekt");
const starprojekt = document.querySelector(".starprojekt");
const menuommig = document.querySelector(".menuommig");
const starom = document.querySelector(".starom");
const totop = document.querySelector(".totopimg");
const migdrej = document.querySelector(".migdrej");
const migdrejimgsrc = document.querySelector(".migdrejimgsrc");
const logonav = document.querySelector(".logonav");

// burger

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// top logo
logonav.style.cursor = "pointer";
logonav.addEventListener("click", logolink);

function logolink() {
  console.log("logolink");
  location.href = "index.html";
}

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  logonav.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
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

// Mig drej stop og start

migdrej.addEventListener("mousedown", migfanget);
migdrej.style.cursor = "grab";

function migfanget() {
  console.log("migfanget");
  migdrejimgsrc.src = "images/migdrej_5.jpg";
}

migdrej.addEventListener("mouseup", migsluppet);

function migsluppet() {
  console.log("migsluppet");
  migdrejimgsrc.src = "images/mig-drej-gif.gif";
}

// Knapper

const btnstyle1 = document.querySelector(".btn1");
const btnstyle2 = document.querySelector(".btn2");
const btnstyle3 = document.querySelector(".btn3");
const btnstyle4 = document.querySelector(".btn4");
const btnstyle5 = document.querySelector(".btn5");
btnstyle1.style.cursor = "pointer";
btnstyle2.style.cursor = "pointer";
btnstyle3.style.cursor = "pointer";
btnstyle4.style.cursor = "pointer";
btnstyle5.style.cursor = "pointer";

btnstyle1.addEventListener("click", tema1);

function tema1() {
  console.log("tema1");
  location.href = "projekt.html";
}

btnstyle2.addEventListener("click", tema2);

function tema2() {
  console.log("tema2");
  location.href = "projekt.html";
}
btnstyle3.addEventListener("click", tema3);

function tema3() {
  console.log("tema3");
  location.href = "projekt.html";
}
btnstyle4.addEventListener("click", tema4);

function tema4() {
  console.log("tema4");
  location.href = "projekt.html";
}
btnstyle5.addEventListener("click", tema5);

function tema5() {
  console.log("tema5");
  location.href = "projekt.html";
}

// Footer links

const ig = document.querySelector(".ig");
const fb = document.querySelector(".fb");
const li = document.querySelector(".li");

ig.style.cursor = "pointer";
fb.style.cursor = "pointer";
li.style.cursor = "pointer";

ig.addEventListener("click", iglink);

function iglink() {
  console.log("iglink");
  location.href = "https://www.instagram.com/cutflowers_design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
}

fb.addEventListener("click", fblink);

function fblink() {
  console.log("fblink");
  location.href = "https://www.facebook.com/people/Erik-Fjord-Lyngstadaas/pfbid0DX9kv4SbLsf1GUdcYyE2cHAmwkmvem2DznCrWe77Gyhi8V6LF4DTydfbihBGdPb3l/";
}

li.addEventListener("click", lilink);

function lilink() {
  console.log("lilink");
  location.href = "https://www.linkedin.com/in/erik-fjord-lyngstadaas-26919a3b1";
}
