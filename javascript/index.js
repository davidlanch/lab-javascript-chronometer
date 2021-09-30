const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  setResetBtn();
}

function setSplitBtn() {
  chronometer.split();
  btnRightElement.textContent = "RESET";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  setSplitBtn(); 
}

function setResetBtn() {
  chronometer.reset();
  btnRightElement.textContent = "SPLIT";
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});
