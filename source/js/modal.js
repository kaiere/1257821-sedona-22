const reviewForm = document.querySelector(".review__form");
const surname = reviewForm.querySelector(".field--surname");
const firstName = reviewForm.querySelector(".field--name");
const telephone = reviewForm.querySelector(".field--tel");
const mail = reviewForm.querySelector(".field--mail");
const submitForm = document.querySelector(".review__button");
const failPopup = document.querySelector(".modal--fail");
const closeFail = failPopup.querySelector(".modal__button");
const successPopup = document.querySelector(".modal--success");
const closeSuccess = document.querySelector(".modal__button--success");

submitForm.addEventListener("click", function(evt) {
  if (!surname.value || !firstName.value || !telephone.value || !mail.value) {
    failPopup.classList.add("modal--show")
  } else {
    evt.preventDefault();
    successPopup.classList.add("modal--show");
  }
});

closeFail.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (failPopup.classList.contains("modal--show")) {
    failPopup.classList.remove("modal--show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    if (failPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      failPopup.classList.remove("modal--show");
    }
  }
});

closeSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (successPopup.classList.contains("modal--show")) {
    successPopup.classList.remove("modal--show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    if (successPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      successPopup.classList.remove("modal--show");
    }
  }
});
