"use strict";

var toggleTheme = function toggleTheme() {
  /**
   * toggle the theme and save it to the local storage
   */
  var theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

window.onscroll = function () {
  /**
   * make the navbar sticky when you scroll past the
   * landing page and relative when you are back on it
   */
  var navbar = document.querySelector('nav');
  var navbarOffset = navbar.offsetTop;

  if (window.scrollY >= navbarOffset) {
    navbar.style.position = "fixed";
  }

  if (window.scrollY < document.documentElement.clientHeight) {
    navbar.style.position = "relative";
  }
};

window.onload = function () {
  var _localStorage$getItem;

  var theme = (_localStorage$getItem = localStorage.getItem("theme")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
};
