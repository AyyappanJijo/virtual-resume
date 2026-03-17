// ── SCROLL SPY (active nav link) ──
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ── BACKGROUND AUTO CHANGE every 50 seconds ──
const images = [
  "assets/Photo/Pro.jpg",
  "assets/Photo/Programer.jpg",
  "assets/Photo/System.jpg",
  "assets/Photo/Techie.jpg"
];

let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  const hero = document.querySelector(".hero");

  // Fade out
  hero.style.opacity = "0.6";

  setTimeout(() => {
    hero.style.background = `url(${images[index]}) center/cover no-repeat`;
    // Fade back in
    hero.style.opacity = "1";
  }, 600);
}

// Smooth opacity transition on hero
document.querySelector(".hero").style.transition = "opacity 0.6s ease, background 0.5s ease";

setInterval(changeBackground, 50000); // 50 seconds