<script>
      var link = document.querySelector(".button-write");
      var popup = document.querySelector(".write-us");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var username = popup.querySelector("[name=username]");
      var useremail = popup.querySelector("[name=useremail]");


      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("show-write-us");
        username.focus();
});
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("show-write-us");
});

       form.addEventListener("submit", function (evt) {
         evt.preventDefault();
         if (!username.value || !useremail.value) {
           evt.preventDefault();
           console.log("Нужно заполнить все поля формы");
}
});

</script>
