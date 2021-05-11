const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".menu-items");
const closeMenu = document.querySelector(".closeMenu");
const menuOverlay = document.querySelector(".menu-overlay");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);

function show() {
  mainMenu.style.display = "flex";
  closeMenu.style.display = "flex";
  menuOverlay.style.display = "flex";
}

function hide() {
  mainMenu.style.display = "none";
  closeMenu.style.display = "none";
  menuOverlay.style.display = "none";
}

const playVideo = document.querySelector("#play-video");
const videoOverlayOpen = document.querySelector("#video-overlay");
const videoOverlayClose = document.querySelector(".video-overlay-close");
const videoOverlay = document.querySelector(".video-overlay");

playVideo.addEventListener("click", mostrar);
function mostrar() {
  videoOverlayOpen.classList.add("open");
  videoOverlayOpen.querySelector("iframe").src =
    "https://www.youtube.com/embed/lye4NgjNh-c";
}

videoOverlayClose.addEventListener("click", close_video);
videoOverlay.addEventListener("click", close_video);

function close_video() {
  videoOverlayOpen.classList.remove("open");
  videoOverlayOpen.querySelector("iframe").src = "";
}
