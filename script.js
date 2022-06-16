"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-inks");
let menuBg = document.querySelector(".header__menu-bg");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBg.classList.toggle("show-bg");
  // console.log(e.target);
});

//Initializaton of sliders
// let sliderNumber = 0;
// let maxSlider = 4;
// let outPut = document.getElementById("output");

// function nextSlide() {
//   sliderNumber = sliderNumber + 1;
//   console.log(sliderNumber);

//   // debugger;

//   outPut.src = "./imgs/image" + sliderNumber + ".svg";
// }

let slider = document.getElementById("slider-main");
let items = document.getElementsByName("item");

function nextSlide() {
  slider.append(items[0]);
}
