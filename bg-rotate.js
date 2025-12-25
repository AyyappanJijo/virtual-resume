const hero = document.querySelector(".hero");

const backgrounds = [
  "assets/Photo/Child.jpg",
  "assets/Photo/Pro.jpg",
  "assets/Photo/Programmer.jpg",
  "assets/Photo/System.jpg",
  "assets/Photo/Techie.jpg"
];

let index = 0;
hero.style.backgroundImage = `url(${backgrounds[0]})`;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
}, 60000);

