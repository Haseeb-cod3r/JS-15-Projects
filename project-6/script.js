let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let displayTime = document.getElementById("displayTime");
const startBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let timer = null;

function stopwatch() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 100
      ? milliseconds < 10
        ? "00" + milliseconds
        : "0" + milliseconds
      : milliseconds;

  displayTime.innerHTML = m + ":" + s + ":" + ms;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
}

function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  displayTime.innerHTML = "00:00:000";
}

startBtn.addEventListener("click", watchStart);

stopBtn.addEventListener("click", watchStop);

resetBtn.addEventListener("click", watchReset);
