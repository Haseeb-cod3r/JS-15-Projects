const passwordBox = document.getElementById("Password");
const Btn = document.getElementById("Btn");
const copy = document.getElementById("copy");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
const display = document.querySelector(".display");

const eye = document.getElementById("eye");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>-=";

const allChars = upperCase + lowerCase + number + symbol;



function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];


  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;

  if (passwordBox.value.length > 0) {
    msg.style.display = "block";
  } 
  else {
    msg.style.display = "none";
  }
  if (passwordBox.value.length < 4) {
    str.innerHTML = "Weak";
    display.style.borderColor = "#ff5925";
    str.style.color = "#ff5925";
  } 
  else if (passwordBox.value.length >= 4 && passwordBox.value.length < 8) {
    str.innerHTML = "Medium";
    display.style.borderColor = "yellow";
    str.style.color = "yellow";
  } 
  else if (passwordBox.value.length >= 8) {
    str.innerHTML = "strong";
    display.style.borderColor = "#26d730";
    str.style.color = "#26d730";
  }
}




function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

Btn.addEventListener("click", () => {
  createPassword();
});

copy.addEventListener("click", () => {
  copyPassword();
});




passwordBox.addEventListener("input", () => {
  if (passwordBox.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (passwordBox.value.length < 4) {
    str.innerHTML = "Weak";
    display.style.borderColor = "#ff5925";
    str.style.color = "#ff5925";
  } else if (passwordBox.value.length >= 4 && passwordBox.value.length < 8) {
    str.innerHTML = "Medium";
    display.style.borderColor = "yellow";
    str.style.color = "yellow";
  } else if (passwordBox.value.length >= 8) {
    str.innerHTML = "strong";
    display.style.borderColor = "#26d730";
    str.style.color = "#26d730";
  }
});



eye.addEventListener("click", () => {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    eye.src = "./images/eye.png";
  } else {
    passwordBox.type = "password";
    eye.src = "./images/hidden.png";
  }
});
