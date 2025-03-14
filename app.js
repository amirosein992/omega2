let runningCount = 0;
let cardsPlayed = 0;  // برای ذخیره تعداد کارت‌های بازی شده
let totalCards = 0;   // برای ذخیره تعداد کارت‌های کل
let remainingCards = 0;  // برای ذخیره تعداد کارت‌های باقی‌مانده

function updateDisplay() {
  // Update running count display
  document.getElementById('running-count').textContent = "Running Count: " + runningCount;
  document.getElementById('cards-played').textContent = "Cards Played: " + cardsPlayed;
  document.getElementById('cards-remaining').textContent = "Cards Remaining: " + remainingCards;
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
    cardsPlayed++;  // افزایش تعداد کارت‌های بازی شده
    remainingCards--;  // کاهش تعداد کارت‌های باقی‌مانده

    updateDisplay();
  }
}

// Update total cards when the total decks are entered
function updateTotalCards() {
  const totalDecks = document.getElementById('total-decks').value;
  
  if (totalDecks && totalDecks > 0) {
    totalCards = totalDecks * 52;  // هر دست کارت 52 کارت دارد
    remainingCards = totalCards;  // تعداد کارت‌های باقی‌مانده برابر با کل کارت‌ها
    updateDisplay();
  } else {
    alert("Please enter a valid number for total decks.");
  }
}

// Call this function when the "Total Decks" input changes
document.getElementById('total-decks').addEventListener('input', updateTotalCards);

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
