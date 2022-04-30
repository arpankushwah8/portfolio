const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

const navMenu = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-item");

const header = document.querySelector("#header");

const blurBg = document.querySelector(".bg-blur");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("hamburger-open");
  // body.classList.toggle("lock-scroll");
  // blurBg.classList.toggle("bg-blur-open");
  navMenu.classList.toggle("open");

  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle("fade");
  });
  // navLinks.classList.add("active");
}

navLinks.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("hamburger-open");
  body.classList.remove("lock-scroll");
  navMenu.classList.remove("open");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("fade");
  });
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});


