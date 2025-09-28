let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");

function generateQrCode() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
  }
}

btn.addEventListener("click", () => {
  generateQrCode();
});
