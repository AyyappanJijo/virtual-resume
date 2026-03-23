// ── SCROLL SPY — highlights the correct nav link while scrolling ──
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
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


// ── BACKGROUND AUTO CHANGE every 50 seconds with smooth fade ──
const images = [
  "Photo/Pro.jpg",
  "Photo/Programer.jpg",
  "Photo/System.jpg",
  "Photo/Techie.jpg"
];

let bgIndex = 0;
const hero = document.querySelector(".hero");

// Preload all background images so they swap instantly without flicker
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  bgIndex = (bgIndex + 1) % images.length;

  // Fade hero text/overlay out slightly
  hero.style.opacity = "0.5";

  setTimeout(() => {
    hero.style.backgroundImage = `url(${images[bgIndex]})`;
    hero.style.opacity = "1";
  }, 500);
}

// Set transition once on load
hero.style.transition = "opacity 0.5s ease";

// Start rotation after 50 seconds, then every 50 seconds
setInterval(changeBackground, 50000);
