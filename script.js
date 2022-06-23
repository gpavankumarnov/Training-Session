"use strict";

//Hamburger dashboard mobile view TODO:

const hamburger = document.querySelector(".hamburger");

let menu = document.querySelector(".header__tabletDashboardlist");
const sec = document.querySelector("section.main");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  // debugger;
  console.log("clicked");

  hamburger.style.display = "none";
  sec.style.display = "none";
  // closeMenu.style.display = "block";
  closeMenu.style.display = "block";

  closeMenu.classList.toggle("close-display");

  menu.classList.toggle("show-menu");

  console.log("clicked close");
});

const closeMenu1 = document.querySelector(".close-menu");
const section = document.querySelector("section.main");
const hamburgerBtn = document.querySelector(".hamburger");
let menu1 = document.querySelector(".header__tabletDashboardlist");
closeMenu1.addEventListener("click", () => {
  section.style.display = "block";
  hamburgerBtn.style.display = "block";
  closeMenu1.style.display = "none";

  menu1.classList.remove("show-menu");
});

//action cards scroll  TODO:

let slidePosition = 1;
const num_slides = document.querySelectorAll(".status_card");
let totalSlides = num_slides.length;
console.log(totalSlides);
let previousBtn = document.getElementById("previousButton");
previousBtn.style.display = "none";
//4

document.getElementById("nextButton").addEventListener("click", function () {
  moveToNextSlide();
});

document
  .getElementById("previousButton")
  .addEventListener("click", function () {
    moveToPreviousSlide();
    console.log("moving to previous slide");
  });

function updateSlidePosition() {
  let nextBtn = document.getElementById("nextButton");
  if (slidePosition === 4) {
    nextBtn.style.display = "none";
    slidePosition = 4;
    updatePreviousSlidePosition();
  } else if (slidePosition <= 4) {
    nextBtn.style.display = "block";
  }
}

function moveToNextSlide() {
  let nextBtn = document.getElementById("nextButton");
  // slidePosition >= 1 &&
  //0 === 3
  if (slidePosition <= 3) {
    let currentSlide = document.getElementById("cont1");

    let currentWidth = currentSlide.clientWidth;
    document
      .getElementById("cont")
      .scrollBy(Number(currentSlide.clientWidth), 0);
    console.log(
      `currentSlide width is ` + document.getElementById("cont").clientWidth
    );
    //not equals then increase
  }
  slidePosition++;
  console.log(slidePosition);

  updateSlidePosition();
  updatePreviousSlidePosition();
}

function moveToPreviousSlide() {
  //0 === 3
  if (slidePosition <= 4) {
    let currentSlide = document.getElementById("cont1");

    let currentWidth = currentSlide.clientWidth;
    document
      .getElementById("cont")
      .scrollBy(Number(-currentSlide.clientWidth), 0);
    console.log(
      `currentSlide width is ` + document.getElementById("cont").clientWidth
    );
    //not equals then increase
  }
  slidePosition--;
  console.log(slidePosition);

  updateSlidePosition();
  updatePreviousSlidePosition();
}

function updatePreviousSlidePosition() {
  let previousBtn = document.getElementById("previousButton");
  if (slidePosition === 1) {
    previousBtn.style.display = "none";
    slidePosition = 1;
  } else if (slidePosition <= 4) {
    previousBtn.style.display = "block";
  }
}

//Action cards scroll TODO:
/*
function nextClick() {
  let nextBtn = document.getElementById("nextButton");

  let currentSlide = document.getElementById("cont1");
  console.log(`currentSlide width is ` + currentSlide.clientWidth);
  let currentWidth = currentSlide.clientWidth;
  document.getElementById("cont").scrollBy(Number(currentSlide.clientWidth), 0);
  console.log(
    `currentSlide width is ` + document.getElementById("cont").clientWidth
  );
}

function previousClick() {
  let currentSlide = document.getElementById("cont1");
  console.log(`currentslide width is ${currentSlide.clientWidth}`);
  let currentWidth = currentSlide.clientWidth;
  document
    .getElementById("cont")
    .scrollBy(Number(-currentSlide.clientWidth), 0);
}
*/
//Initializaton of sliders
// let sliderNumber = 0;
// let allSlides = document.querySelectorAll(".status__actionCards>div");
// let slides = allSlides.length - 1;
// console.log(allSlides.length);
// console.log(slides);

// let outPut = document.getElementById("output");

// function nextSlide() {
//   sliderNumber = sliderNumber + 1;
//   console.log(sliderNumber);

//   // debugger;

//   outPut.src = "./imgs/image" + sliderNumber + ".svg";
// }

// let slider = document.getElementById("slider-main");
// let items = document.getElementsByName("item");

// function nextSlide() {
//   slider.append(items[0]);
// }

// let slider = document.querySelector(".status__header.corousel");
/** 
let slider = document.getElementById("slider-main");
let nextArrow = document.querySelector(".nav.next");
let slideIndex = 0;

nextArrow.addEventListener("click", function () {
  slideIndex = slideIndex < 3 ? slideIndex + 1 : 3;
  // slider.style.transform = "translate(" + slideIndex * -25 + "%)";
  console.log("clicked");
});
*/
// const updates_scrollBtn = document.querySelector(".updates__angle-right");
// const contentToBeScroll = document.querySelector(".updates__content");

// updates_scrollBtn.addEventListener("click", function () {
//   // contentToBeScroll.style.transform)
//   contentToBeScroll.scrollTo(100, 0);
//   console.log("content scrolled");
// });

let updates_angleLeft = document.querySelector(".updates__angle-left");
let updates_angleRight = document.querySelector(".updates__angle-right");
updates_angleLeft.style.display = "none";

updates_angleRight.addEventListener("click", function () {
  console.log("angle");
  let list_elements = document.querySelector(".updates__content>:nth-child(4)");
  list_elements.scrollIntoView();
});

updates_angleRight.addEventListener("click", function () {
  let list_elements = document.querySelector(".updates__content>:nth-child(5)");
  list_elements.scrollIntoView();
});

updates_angleRight.addEventListener("click", function () {
  let list_elements = document.querySelector(".updates__content>:nth-child(6)");
  list_elements.scrollIntoView();
  if ((updates_angleRight.style.display = "block")) {
    updates_angleRight.style.display = "none";
  }
  if ((updates_angleLeft.style.display = "none")) {
    updates_angleLeft.style.display = "block";
  }
});

// function scrollContent() {
//   console.log("scroll clicked");
//   let ele = document.querySelector(".updates__content");
// }

function scrollLeftContent() {
  console.log("scroll clicked");
  let ele = document.querySelector(".updates__content");
  let num = (ele.scrollLeft -= 50);

  if (num <= -50) {
    console.log(num);
    updates_angleLeft.style.display = "none";
    updates_angleRight.style.display = "block";
  }
}

//Updates scroll  TODO:
/** 
let updates_angleLeft = document.querySelector(".updates__angle-left");
function scrollContent() {
  console.log("scroll clicked");

  let ele = document.querySelector(".updates__content");
  console.log("clientWidth is " + ele.clientWidth);
  let num = (ele.scrollLeft += 30);
  console.log(num);
  if (num >= 30) {
    console.log(num);
    updates_angleLeft.style.display = "block";
  } else if (ele.clientWidth === 558) {
    console.log("clientWidth is " + ele.clientWidth);
    console.log("innerWidth is " + ele);
    updates_angleLeft.style.display = "none";
  }
}

function scrollLeftContent() {
  console.log("scroll clicked");
  let ele = document.querySelector(".updates__content");
  let num = (ele.scrollLeft -= 30);
  console.log(num);
  if (num >= 30) {
    console.log(30);
    updates_angleLeft.style.display = "block";
  } else if (ele.scrollLeft < 30) {
    updates_angleLeft.style.display = "none";
  }
}*/

// based on currentposiiton + add 100

//Search functionality  TODO:
/*
let input = document.querySelector("#searchBox");

let setTimeID;
const searchFunc = () => {
  clearInterval(setTimeID);
  setTimeID = setTimeout(searchFilter, 2000);
};

// let mobileSearchBoxLocator = "searchBox";
// let biggerSearchBoxLocator = "searchBox-Bigger";

const searchFilter = () => {
  debugger;
  let inputPass = document.getElementById("searchBox").value;
  let id = Number(inputPass);
  console.log(id);
  let wrapper = document.querySelector(".wrapper");
  let shipmentIDs = wrapper.querySelectorAll(
    ".wrapper__header-left>:nth-child(2)"
  );

  // let origins = document.querySelectorAll(".wrapper__origin>:nth-child(2)");

  //or combination

  for (let i = 0; i < shipmentIDs.length; i++) {
    console.log(shipmentIDs.length);
    console.log(shipmentIDs[i].innerHTML);
    if (id === Number(shipmentIDs[i].innerText)) {
      console.log(`{shipmentIDs[i]} is present in the shipmentID's`);
      let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
      wrapperSize[i].style.display = "";
    } else {
      console.log(`{shipmentIDs[i]} is not present in the shipmentID's`);
      let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
      wrapperSize[i].style.display = "none";
    }
  }
};
*/

let input = document.querySelector("#searchBox");

let setTimeID;
const searchFunc = () => {
  clearInterval(setTimeID);
  setTimeID = setTimeout(searchFilter, 2000);
};

const searchFilter = () => {
  debugger;
  let inputPass = document.getElementById("searchBox").value;
  console.log(inputPass);
  // let wrapper_NodeList = document.querySelectorAll(".wrapper .text");

  let wrappers = document.querySelectorAll(".wrapper__num");

  console.log(wrappers);
  // debugger;
  // Array.from(wrapper_NodeList).forEach((x) => {
  //   console.log(Number(x.innerText));
  //   console.log(id);
  // if (Number(x.innerText) === id) {
  //   console.log(x.innerText);
  debugger;

  const term = inputPass.target.value.toLowerCase();
  // console.log(term);
  const origin = document.getElementsByClassName("wrapper");

  console.log(origin);
  let list = [];

  Array.from(origin).forEach(function (book) {
    let shipment_id = book.children[0].children[0].children[1].innerText;

    let origin_name =
      book.children[1].children[0].children[1].children[1].innerText;

    let destination_name =
      book.children[1].children[1].children[1].children[1].innerText;
    list.push({ shipment_id, origin_name, destination_name });
  });
  console.log(list);
  var indexes = [];
  list.filter((e, i) => {
    if (
      e.shipment_id === s.value ||
      e.origin_name === s.value ||
      e.destination_name === s.value ||
      s.value === ""
    ) {
      indexes.push(i);
      origin[i].style.display = "block";
    } else {
      origin[i].style.display = "none";
    }
  });
  //console.log(indexes);
};

// updatedone:
//   for (let j = 0; j < wrappers.length; j++) {
//     let wrapper_NodeList = wrappers[j].querySelectorAll(".text");
//     for (let i = 0; i < 1; i++) {
//       console.log(wrapper_NodeList[i].innerText);
//       if (
//         inputPass === wrapper_NodeList[0].innerText ||
//         inputPass == wrapper_NodeList[1].innerText ||
//         inputPass == wrapper_NodeList[2].innerText
//       ) {
//         let wrapper = document.querySelector(".wrapper");
//         let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
//         wrapperSize[i].style.display = "";
//       } else {
//         console.log("Not available in the class.");
//         let wrapper = document.querySelector(".wrapper");
//         let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
//         wrapperSize[j].style.display = "none";
//       }
//     }
//   }
// };

//Recent
//   for (let i = 0; i < wrapper_NodeList.length; i++) {
//     console.log(wrapper_NodeList[i].innerText);
//     if (
//       inputPass === wrapper_NodeList[i].innerText ||
//       inputPass == wrapper_NodeList[i + 1].innerText ||
//       inputPass == wrapper_NodeList[i + 2].innerText
//     ) {

//       let wrapper = document.querySelector(".wrapper");
//       let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
//       wrapperSize[i].style.display = "";
//     } else {
//       let wrapper = document.querySelector(".wrapper");
//       let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
//       wrapperSize[i].style.display = "none";
//     }
//   }
// };

// let shipmentIDs = wrapper.querySelectorAll(
//   ".wrapper__header-left>:nth-child(2)"
// );
// let origins = document.querySelectorAll(".wrapper__origin>:nth-child(2)");
// let list = [];
// list = [
//   Array.from(document.querySelectorAll(".wrapper .text")).map(
//     (ele) => ele.innerText
//   ),
// ];
// list.push(Array.from(shipmentIDs).map((ele) => ele.innerText));

// list.push(Array.from(origins).map((ele1) => ele1.innerText));

//or combination
/** 
  for (let i = 0; i < filterItems.length; i++) {
    console.log(filterItems.length);
    console.log(filterItems[i].innerHTML);
    if (id === filterItems[i].innerText) {
      console.log(filterItems[i] + " is present in the shipmentID's");
      let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
      wrapperSize[i].style.display = "";
    } else {
      console.log(filterItems[i] + "is not present in the shipmentID's");
      let wrapperSize = wrapper.querySelectorAll(".wrapper__num");
      wrapperSize[i].style.display = "none";
    }
  }
};
*/
//Practice  TODO:
/**
//Map funciton.
const arr = [2, 5, 4, 8, 15];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

//Filter array

const filterarr = [2, 5, 4, 8, 15];

function filterArray(x) {
  return x > 2;
}
const output1 = filterarr.filter(filterArray);

const output2 = filterarr.filter(function filterarr(x) {
  return x > 1;
});

const output3 = filterarr.filter((x) => x > 4);

console.log(output3);

//Reduce.

const reduceArr = [2, 5, 4, 8, 15];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const out1 = findSum(reduceArr);

console.log(out1);

const out = reduceArr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(out);
*/
