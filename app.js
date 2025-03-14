let runningCount = 0;

function updateDisplay() {
  // Update running count display
  document.getElementById('running-count').textContent = "Running Count: " + runningCount;
}

function addCard(card) {
  const cardValues = {
    2: 1, 3: 1, 7: 1,
    4: 2, 5: 2, 6: 2,
    8: 0,
    9: -1,
    10: -2, 'J': -2, 'Q': -2, 'K': -2, 'A': -2
  };

  if (cardValues[card] !== undefined) {
    runningCount += cardValues[card];
    updateDisplay();
  }
}

// Calculate the True Count when the button is clicked
function calculateTrueCount() {
  const remainingDecks = document.getElementById('remaining-decks').value;
  
  if (remainingDecks && remainingDecks > 0) {
    // True Count = Running Count / Remaining Decks
    const trueCount = runningCount / remainingDecks;
    document.getElementById('true-count').textContent = "True Count: " + trueCount.toFixed(2);
  } else {
    // Handle invalid input (negative or zero values)
    alert("Please enter a valid number for remaining decks.");
  }
}
