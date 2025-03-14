let runningCount = 0;
let decksRemaining = 1; // Assume 1 deck for simplicity in this example
const cardValues = {
  2: 1, 3: 1, 7: 1,
  4: 2, 5: 2, 6: 2,
  8: 0,
  9: -1,
  10: -2, 'J': -2, 'Q': -2, 'K': -2, 'A': -2
};

function addCard(card) {
  if (cardValues[card] !== undefined) {
    runningCount += cardValues[card];
    updateDisplay();
  }
}

function resetCount() {
  runningCount = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('running-count').textContent = runningCount;
  const trueCount = (runningCount / decksRemaining).toFixed(2);
  document.getElementById('true-count').textContent = trueCount;
}
