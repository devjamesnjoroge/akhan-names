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
    event.preventDefault();
  } else if (date <= 0 || date > 31) {
    alert("invalid date, correct date(from 1 to 31)");
    event.preventDefault();
  } else if ("month" === month) {
    alert("Please select a month");
    event.preventDefault();
  } else if (year < 1900 || year > 2022) {
    alert("invalid year, correct format(e.g 2000, 1990)");
    event.preventDefault();
  } else {
    calculator(gender, month, date, year);
  }
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
  let akanMale = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yow",
    "Kofi",
    "Kwame",
  ];
  let akanFmale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let switchAns = ansRnd.toString() + gender;

  switch (switchAns) {
    case "1male":
      alert("Your Akan name is " + akanMale[0]);
      break;
    case "1female":
      alert("Your Akan name is " + akanFmale[0]);
      break;
    case "2male":
      alert("Your Akan name is " + akanMale[1]);
      break;
    case "2female":
      alert("Your Akan name is " + akanFmale[1]);
      break;
    case "3male":
      alert("Your Akan name is " + akanMale[2]);
      break;
    case "3female":
      alert("Your Akan name is " + akanFmale[2]);
      break;
    case "4male":
      alert("Your Akan name is " + akanMale[3]);
      break;
    case "4female":
      alert("Your Akan name is " + akanFmale[3]);
      break;
    case "5male":
      alert("Your Akan name is " + akanMale[4]);
      break;
    case "5female":
      alert("Your Akan name is " + akanFmale[4]);
      break;
    case "6male":
      alert("Your Akan name is " + akanMale[5]);
      break;
    case "6female":
      alert("Your Akan name is " + akanFmale[5]);
      break;
    case "7male":
      alert("Your Akan name is " + akanMale[7]);
      break;
    case "7female":
      alert("Your Akan name is " + akanFmale[7]);
      break;
    default:
      alert("An error occurred, details sent to server");
  }
}
