const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");
const hrDiv = document.getElementById("hr");

let hour = 0;
let minut = 0;
let second = 0;

secDiv.innerText = second;
minDiv.innerText = minut;
hrDiv.innerText = hour;
function addSecond() {
  second++;
  if (second === 60) {
    minut++;
    second = 0;
  }
  if (minut === 60) {
    hour++;
    minut = 0;
  }

  secDiv.innerText = second;
  minDiv.innerText = minut;
  hrDiv.innerText = hour;
}
let interval = setInterval(addSecond, 1000);

function startTimer() {
  clearInterval(interval);
  interval = setInterval(addSecond, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  hour = 0;
  minut = 0;
  second = 0;

  secDiv.innerText = second;
  minDiv.innerText = minut;
  hrDiv.innerText = hour;
}
