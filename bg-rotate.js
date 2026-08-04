// ── HERO BACKGROUND AUTO-ROTATE — glitch-style transition, every 50s ──
const images = [
  "Photo/Pro.jpg",
  "Photo/Programer.jpg",
  "Photo/System.jpg",
  "Photo/Techie.jpg"
];

let bgIndex = 0;
const hero = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Preload all background images so they swap instantly without flicker
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  bgIndex = (bgIndex + 1) % images.length;

  if (prefersReducedMotion) {
    hero.style.backgroundImage = `url(${images[bgIndex]})`;
    return;
  }

  // Quick glitch-flicker out: a couple of fast opacity/hue jolts, then swap, then settle
  hero.style.transition = "opacity 0.09s steps(2), filter 0.09s steps(2)";
  hero.style.opacity = "0.35";
  hero.style.filter = "hue-rotate(35deg) saturate(2)";

  setTimeout(() => {
    hero.style.opacity = "0.85";
    hero.style.filter = "hue-rotate(-20deg) saturate(1.6)";
  }, 90);

  setTimeout(() => {
    hero.style.backgroundImage = `url(${images[bgIndex]})`;
    hero.style.opacity = "1";
    hero.style.filter = "none";
    hero.style.transition = "opacity 0.4s ease, filter 0.4s ease";
  }, 180);
}

// Start rotation after 50 seconds, then every 50 seconds
setInterval(changeBackground, 50000);
