var hambuger = document.querySelector("#menubar");
var menubar = document.querySelector(".menu-bar");
var lowerNav = document.querySelector("#navUl");
var nav = document.querySelector(".nav");
var overlay = document.querySelector(".bkg-overlay");
var btn = document.querySelector("button");
var date = document.querySelector("input#date").value;
form = document.querySelector("form");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("active");
  lowerNav.classList.toggle("is-active");
  nav.classList.toggle("changebg");
  overlay.classList.toggle("mvDown");
});

//Form validation
form.addEventListener("submit", function (submit) {
  var gender = document.querySelector("select#gender").value;
  var month = document.querySelector("select#month").value;
  var date = parseInt(document.querySelector("input#date").value);
  var year = parseInt(document.querySelector("input#year").value);
  if ("gender" === gender) {
    alert("Please select a gender");
  } else if (date <= 0 || date > 31) {
    alert("invalid date");
  } else if ("month" === month) {
    alert("Please select a month");
  } else if (year < 1900 || year > 2022) {
    alert("invalid year");
  } else {
    calculator();
  }
  event.preventDefault();
});


// Business Logic

