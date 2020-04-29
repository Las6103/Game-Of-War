const suit = ["hearts", "spades", "clubs", "diamonds"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deckOfCards = [];
let playerOne = [];
let playerTwo = [];

// Creates Deck of 52 cards
function getDeck() {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      deckOfCards.push(rank[j]);
    }
  }
  return deckOfCards;
}

// Assigns 26 cards to each player
function assignDeck() {
  let deck = getDeck();
  console.log(deck);
    deck = deck[Math.floor(Math.random() * deck.length)];
    console.log(deck);
  function randomDeck() {
    playerOne = deck.splice(0, 26);
    playerTwo = deck.splice(0, 26);
    console.log(deck);
  }
  return randomDeck();
}

assignDeck();

console.log(playerOne);
console.log(playerTwo);
