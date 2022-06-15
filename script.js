const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-inks");
let menuBg = document.querySelector(".header__menu-bg");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBg.classList.toggle("show-bg");
  // console.log(e.target);
});
