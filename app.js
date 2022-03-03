var hambuger = document.querySelector("#menubar");
var menubar = document.querySelector(".menu-bar");
var lowerNav = document.querySelector("#navUl");
var nav = document.querySelector(".nav");
var overlay = document.querySelector(".bkg-overlay");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("active");
  lowerNav.classList.toggle("is-active");
  nav.classList.toggle("changebg");
  overlay.classList.toggle("mvDown");
});
