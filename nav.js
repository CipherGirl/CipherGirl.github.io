const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const btnClose = doc.querySelectorAll(".overlay a");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

btnClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });
});
