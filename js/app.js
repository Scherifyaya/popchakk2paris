document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const backgrounds = [
  "assets/backgrounds/bg1.jpg",
  "assets/backgrounds/bg2.jpg",
  "assets/backgrounds/bg3.jpg",
  "assets/backgrounds/bg4.jpg"
];

const randomBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.backgroundImage =
  `linear-gradient(rgba(5,7,12,.72), rgba(5,7,12,.88)), url("${randomBackground}")`;

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";
