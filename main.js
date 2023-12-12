function hide() {
  document.querySelector(".load").remove();
  document.querySelector("img").style.display = "block";
  document.querySelector(".head").style.display = "block";
  document.querySelector(".content").style.display = "block";
}
setTimeout(hide, 1000);
