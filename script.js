const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Do what you can with all you have, wherever you are.",
  "Dream big and dare to fail.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
