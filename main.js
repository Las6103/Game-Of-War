const suit = ["hearts", "spades", "clubs", "diamonds"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deckOfCards = [];
let randomDeck = [];
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

// Randomize the deckOfCards array
function randomizeDeck() {
  let deck = getDeck();
    for (let i = 0; i < deck.length; i++) {
        let rand = deck[Math.floor(Math.random() * deck.length)];
        randomDeck.push(rand);
    }
    console.log(randomDeck);
    return randomDeck;
}
randomizeDeck();



