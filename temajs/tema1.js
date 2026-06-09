const tema1right = document.querySelector(".arrowrighttema1");
const prbtn = document.querySelector(".projekt-button");
// Tema knapper

tema1right.addEventListener("click", tiltema2);

function tiltema2() {
  console.log("tiltema2");
  location.href = "tema2.html";
}

// Færdigt projekt knap

prbtn.addEventListener("click", tilsite);

function tilsite() {
  console.log("tilsite");
  location.href = "https://www.youtube.com/watch?v=PeeCvYsjiT4&source_ve_path=OTY3MTQ&embeds_referring_euri=http%3A%2F%2F127.0.0.1%3A5500%2F";
}
