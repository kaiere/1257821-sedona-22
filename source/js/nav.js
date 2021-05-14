const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle--no-js");

navToggle.classList.remove("main-nav__toggle--no-js");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
