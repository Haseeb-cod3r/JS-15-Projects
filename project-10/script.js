const menu = document.getElementById("menu-icon");
const close = document.getElementById("close");
const sideBar = document.querySelector(".sidebar");
function showSidebar() {
  sideBar.style.right = "0";
}

function hideSidebar() {
  sideBar.style.right = "-400px";
}

menu.addEventListener("click", () => {
  showSidebar();
});
close.addEventListener("click", () => {
  hideSidebar();
});
