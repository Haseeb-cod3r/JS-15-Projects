function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12;
  h = h ? h : 12;

  h = String(h).padStart(2, "0");
  m = String(m).padStart(2, "0");
  s = String(s).padStart(2, "0");

  document.querySelector(".clock").textContent = `${h}:${m}:${s} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
