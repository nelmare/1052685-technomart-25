var basketLink = document.querySelectorAll(".button-buy");
var basketPopup = document.querySelector(".basket-modal");
var basketClose = basketPopup.querySelector(".modal-close");

for (var i = 0; i < basketLink.length; i++) {
basketLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
  });
}

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});
