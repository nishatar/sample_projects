let menuToggle = document.getElementById("menuToggle");
let navListList = document.getElementById("navList");

menuToggle.onclick = function () {
  navList.classList.toggle("active");
};

let openBtn = document.getElementById("openLogin");
let modal = document.getElementById("loginModal");
let closeBtn = document.getElementById("closeModal");

openBtn.onclick = function () {
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

