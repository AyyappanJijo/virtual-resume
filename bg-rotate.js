const hero = document.querySelector(".hero");

const backgrounds = [
  "assets/Photo/Child.jpg",
  "assets/Photo/Pro.jpg",
  "assets/Photo/Programer.jpg",
  "assets/Photo/System.jpg",
  "assets/Photo/Techie.jpg"
];

let index = 0;
hero.style.backgroundImage = `url(${backgrounds[0]})`;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
}, 60000);

const text = "Ayyappan Jijo";
const typingElement = document.getElementById("typing-name");
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

window.addEventListener("load", typeEffect);

