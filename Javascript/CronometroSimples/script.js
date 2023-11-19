var timerInterval;
var timeInSeconds = 0;
var isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timeInSeconds = 0;
  updateTimer();
}

function updateTimer() {
  var hours = Math.floor(timeInSeconds / 3600);
  var minutes = Math.floor((timeInSeconds % 3600) / 60);
  var seconds = Math.floor(timeInSeconds % 60);

  var formattedTime = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);

  document.getElementById('timer').textContent = formattedTime;

  timeInSeconds++;
}

function padNumber(number) {
  return (number < 10 ? '0' : '') + number;
}
