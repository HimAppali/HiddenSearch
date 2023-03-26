"use strict";

const searchBtn = document.querySelector(".search-btn");
const searchCont = document.querySelector(".search-container");
const searchIn = document.querySelector(".search-input");

searchBtn.addEventListener("click", function () {
  searchCont.classList.toggle("active");
  if (searchCont.classList.contains("active")) {
    searchIn.style.width = "15vw";
    searchIn.style.transition = "width 1s ease";
  } else {
    searchIn.style.width = "0";
  }
});
