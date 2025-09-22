let toastBox = document.getElementById("toastBox");
let successBtn = document.getElementById("success");
let ErrorBtn = document.getElementById("error");
let WarningBtn = document.getElementById("warning");

successBtn.addEventListener("click", () => {
  showToast("Request Successful");
});
ErrorBtn.addEventListener("click", () => {
  showToast("Something Went Wrong");
});
WarningBtn.addEventListener("click", () => {
  showToast("Request is not valid!");
});

function showToast(message) {
  let toast = document.createElement("div");
  let line = document.createElement("div");

  toast.classList.add("toast");
  line.classList.add("line");

  toast.appendChild(line);
  toast.append(message);


  if (message === "Request Successful") {
    toast.classList.add("success");
  }
  if (message === "Something Went Wrong") {
    toast.classList.add("error");
  }
  if (message === "Request is not valid!") {
    toast.classList.add("warning");
  }

  toastBox.appendChild(toast);

  
  setTimeout(() => {
    if (toastBox.firstElementChild) {
      toastBox.firstElementChild.remove();
    }
  }, 3000);

}
