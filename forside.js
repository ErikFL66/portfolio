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
  location.href = "tema1.html";
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

// Mig drej stop og start

migdrej.addEventListener("mousedown", migfanget);
migdrej.style.cursor = "grab";

function migfanget() {
  console.log("migfanget");
  migdrej.style.cursor = "grabbing";
  migdrejimgsrc.src = "images/migdrej_5.webp";
}

migdrej.addEventListener("mouseup", migsluppet);

function migsluppet() {
  console.log("migsluppet");
  migdrej.style.cursor = "grab";
  migdrejimgsrc.src = "images/mig-drej-gif.gif";
}

// index knapper link

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

btn1.addEventListener("click", btn1link);

function btn1link() {
  console.log("btn1link");
  location.href = "tema1.html";
}

btn2.addEventListener("click", btn2link);

function btn2link() {
  console.log("btn2link");
  location.href = "tema2.html";
}

btn3.addEventListener("click", btn3link);

function btn3link() {
  console.log("btn3link");
  location.href = "tema3.html";
}

btn4.addEventListener("click", btn4link);

function btn4link() {
  console.log("btn4link");
  location.href = "tema4.html";
}

btn5.addEventListener("click", btn5link);

function btn5link() {
  console.log("btn5link");
  location.href = "tema5.html";
}
