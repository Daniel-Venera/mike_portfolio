let menuBtn = document.querySelector(".menu-btn");
let hamburger = document.querySelector(".menu-btn__burger");
let nav = document.querySelector(".nav");
let menuNav = document.querySelector(".menu-nav");
let navItems = document.querySelectorAll(".menu-nav__item");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}
