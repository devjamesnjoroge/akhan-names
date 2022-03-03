var hambuger = document.querySelector("#menubar");
var menubar = document.querySelector(".menu-bar");
var lowerNav = document.querySelector("#navUl");
var nav = document.querySelector(".nav");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("active");
  lowerNav.classList.toggle("is-active");
  nav.style.backgroundColor = "#6f1c2b";
});
