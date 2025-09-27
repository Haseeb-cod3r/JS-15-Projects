let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

let firstImage = scrollContainer.querySelector("img");
let imageStep = firstImage.offsetWidth + 25;

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();

  if (e.deltaY > 0) {
    scrollContainer.scrollBy({
      left: imageStep,
      behavior: "smooth",
    });
  } else {
    scrollContainer.scrollBy({
      left: -imageStep,
      behavior: "smooth",
    });
  }
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: imageStep,
    behavior: "smooth",
  });
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -imageStep,
    behavior: "smooth",
  });
});
