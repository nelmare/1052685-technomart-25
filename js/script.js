<script>
  var link = document.querySelector(".button-write");
  var popup = document.querySelector(".write-us");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var username = popup.querySelector("[name=username]");
  var useremail = popup.querySelector("[name=useremail]");
  var text = popup.querySelector("[name=write-textarea]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show-write-us");
    username.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show-write-us");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!username.value || !useremail.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("show-write-us")) {
        evt.preventDefault();
        popup.classList.remove("show-write-us");
        popup.classList.remove("modal-error");
      }
    }
  });
</script>
