let runningCount = 0;
let totalDecks = 0;
let cardsPlayed = 0;

function updateDisplay() {
  // Update running count display
  document.getElementById('running-count').textContent = "Running Count: " + runningCount;
  document.getElementById('cards-played').textContent = "Cards Played: " + cardsPlayed;
  document.getElementById('cards-remaining').textContent = "Cards Remaining: " + (totalDecks * 52 - cardsPlayed);
  calculateTrueCount();
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
    cardsPlayed++;
    updateDisplay();
  }
}

// Update total decks and recalculate true count
function updateTotalDecks() {
  const inputDecks = document.getElementById('total-decks').value;
  if (inputDecks && inputDecks > 0) {
    totalDecks = inputDecks;
    updateDisplay(); // Update display when total decks are updated
  } else {
    alert("Please enter a valid number of total decks.");
  }
}

// Calculate the True Count
function calculateTrueCount() {
  // Ensure that there are cards remaining to calculate the true count
  if (totalDecks > 0 && (totalDecks * 52 - cardsPlayed) > 0) {
    const remainingDecks = (totalDecks * 52 - cardsPlayed) / 52;
    const trueCount = runningCount / remainingDecks;
    document.getElementById('true-count').textContent = "True Count: " + trueCount.toFixed(2);
  } else {
    document.getElementById('true-count').textContent = "True Count: 0";
  }
}
