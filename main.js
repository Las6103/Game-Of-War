const suit = ["hearts", "spades", "clubs", "diamonds"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deckOfCards = [];
let randomDeck = [];
let playerOne = [];
let playerTwo = [];

// Creates Deck of 52 cards
function createDeck() {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      deckOfCards.push(rank[j]);
    }
  }
  return deckOfCards;
}

// Randomize the deckOfCards array
function randomizeDeck() {
  let deck = createDeck();
  for (let i = 0; i < deck.length; i++) {
    let rand = deck[Math.floor(Math.random() * deck.length)];
    randomDeck.push(rand);
  }
  return randomDeck;
}

// Assign Deck to players
function assignDeck() {
  function deckValue() {
    playerOne = randomDeck.splice(0, 26);
    playerTwo = randomDeck.splice(0, 26);
  }
  return deckValue();
}

// Intiate the game
function gameStart() {
  createDeck();
  randomizeDeck();
  assignDeck();
}
gameStart();

// Rounds
function rounds() {
  // while (playerOne.length < 52 || playerTwo.length < 52) {
    let playerOneCards = playerOne[playerOne.length - 1];
    let playerTwoCards = playerTwo[playerTwo.length - 1];
    console.log(playerOneCards);
    console.log(playerTwoCards);
    if (playerOneCards === playerTwoCards) {

      // TODO: Create details function
    } else if (playerOneCards > playerTwoCards) {
      let playerTwoPop = playerTwo.pop();
      playerOne.unshift(playerTwoPop);
      // TODO: Create details function
    } else {
      let playerOnePop = playerOne.pop();
      playerTwo.unshift(playerOnePop);
      // TODO: Create details function
    }
  // }
}
rounds();
console.log(playerOne);
console.log(playerTwo);

// compare the last numbers of array, use .length -1 to compare last element in array
// make variables playerOneCards and playerTwoCards, compare
// if playerOneCards > playerTwoCards then .pop playerTwoCards
// use unshift to transfer card into playerOnceCards
// else if
// if playerOneCards < playerTwoCards then .pop playerOneCards
// use unshift to transfer card into playerTwoCards
// else
// playerOneCards = playerTwoCards then
//.length -4




// greater number wins round BUT
// if number is the same then
// remove 3 cards from each array
// compare the 4th card
// greater number wins all the cards
