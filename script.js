"use strict";

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("header-active", this.window.scrollY > 0);
});

const menu = document.querySelector(".menu-icon");
const navbarMobile = document.querySelector(".mobile-navbar-items");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  navbarMobile.classList.toggle("is-active");

  window.onscroll = function () {
    navbarMobile.classList.remove("is-active");
    menu.classList.remove("is-active");
  };
});
