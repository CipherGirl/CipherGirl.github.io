const fade = document.getElementById("fade");
window.addEventListener("scroll", () => {
  fade.style.opacity = 1 - +window.pageYOffset / 400 + "";
  fade.style.top = +window.pageYOffset + "px";
});
