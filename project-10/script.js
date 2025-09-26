const menu = document.getElementById("menu-icon");
const close = document.getElementById("close");
const sideBar = document.querySelector(".sidebar");
function showSidebar() {
  sideBar.style.right = "0";
  sideBar.style.pointerEvents = "auto"
}

function hideSidebar() {
  sideBar.style.right = "-400px";
  sideBar.style.pointerEvents = "none"
}

menu.addEventListener("click", () => {
  showSidebar();
});
close.addEventListener("click", () => {
  hideSidebar();
});
