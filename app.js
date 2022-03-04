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
    calculator(gender, month, date, year);
  }
  event.preventDefault();
});

// Business Logic
function calculator(gender, month, date, year) {
  var yearArray = year.toString().split("");
  var cc = parseInt([yearArray[0], yearArray[1]].join(""));
  var yy = parseInt([yearArray[2], yearArray[3]].join(""));
  var mm = parseInt(month);
  var dd = date;
  let answer =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
  let ansRnd = Math.round(answer);
  alert(ansRnd);
}
