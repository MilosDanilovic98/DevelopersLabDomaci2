// Variables needed

var options = document.getElementsByClassName("option");
var display = document.querySelector("#time");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var tick = new Audio("sounds/tick.wav");
var alarm = new Audio("sounds/alarm.wav");
var myVar;
var currentOption = 1;
var currentTime = 60 * 25;

addEventListeners();
// Adding all the event listeners
function addEventListeners() {
  for (let item of options) {
    item.addEventListener("click", selectedOption);
  }

  startBtn.addEventListener("click", start, { once: true });
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
}

//Starts the countdown

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  myVar = setInterval(myTimer, 1000);

  function myTimer() {
    tick.play();
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    console.log(timer);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    document.title = display.textContent;
    if (--timer < 0) {
      timer = duration;
      timerIsOn = false;
      alarm.play();
    }
    currentTime = timer;
  }
}

//puase the countdown

function stopTimer() {
  clearInterval(myVar);
  startBtn.addEventListener("click", start, { once: true });
}

//restart the clokc

function resetTimer() {
  startBtn.addEventListener("click", start, { once: true });
  switch (currentOption) {
    case 1:
      currentTime = 60 * 25;
      display.textContent = "25:00";
      break;
    case 2:
      currentTime = 60 * 5;
      display.textContent = "5:00";
      break;
    case 3:
      currentTime = 60 * 15;
      display.textContent = "15:00";
      break;

    default:
      break;
  }
  stopTimer();
  document.title = display.textContent;
}

// checks which option is selected

function selectedOption(e) {
  if (event.target.id === "pomodoro") {
    currentOption = 1;
    currentTime = 60 * 25;
    display.textContent = "25:00";
  }
  if (event.target.id === "short") {
    currentOption = 2;
    currentTime = 60 * 5;
    display.textContent = "5:00";
  }
  if (event.target.id === "long") {
    currentOption = 3;
    currentTime = 60 * 15;
    display.textContent = "15:00";
  }
  startBtn.addEventListener("click", start, { once: true });
  document.title = display.textContent;
  clearInterval(myVar);
}

//starts the app
function start() {
  startTimer(currentTime, display);
}
