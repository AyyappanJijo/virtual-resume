const hero = document.querySelector(".hero");

const backgrounds = [
  "Photo/Child.jpg",
  "Photo/Pro.jpg",
  "Photo/Programmer.jpg",
  "Photo/System.jpg",
  "Photo/Techie.jpg"
];

let index = 0;
hero.style.backgroundImage = `url(${backgrounds[0]})`;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
}, 60000);
