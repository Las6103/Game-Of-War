class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

const suit = ["hearts", "spades", "clubs", "diamonds"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deckOfCards = [];
let randomDeck = [];
let playerOne = [];
let playerTwo = [];
// Creates Deck of 52 cards
function createDeck() {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      const newCard = new Card(suit[i], rank[j], value[j]);
      deckOfCards.push(newCard);
    }
  }
  return deckOfCards;
}

console.log(deckOfCards);

// Randomize the deckOfCards array
function randomizeDeck() {
  let deck = createDeck();
  for (let i = 0; i < deck.length; i++) {
    let rand = deck[Math.floor(Math.random() * deck.length)];
    randomDeck.push(rand);
  }
  return randomDeck;
}
randomizeDeck();

// Assign Deck to players
function assignDeck() {
  function deckValue() {
    playerOne = randomDeck.splice(0, 26);
    playerTwo = randomDeck.splice(0, 26);
  }
  return deckValue();
}
assignDeck();
console.log(playerOne);
console.log(playerTwo);

// last card of array functino
function topCard(arr) {
  return arr[arr.length - 1].value;
}

function log(arr) {
  return arr[arr.length - 1].rank;
}

// Intial score
let score = {
  One: 0,
  Two: 0,
};

// Rounds
function rounds() {
  let roundWinner = "";
  let cardsInPlay = [];
  while (playerOne.length < 52 && playerTwo.length < 52) {
    
    // War Situation
    if (topCard(playerOne) === topCard(playerTwo)) {
      cardsInPlay.unshift(
        ...playerOne.splice(playerOne.length - 3),
        ...playerTwo.splice(playerTwo.length - 3)
      );
      continue;

      // Player One Winner
    } else if (topCard(playerOne) > topCard(playerTwo)) {
      roundWinner = "PlayerOne";
      cardsInPlay.unshift(playerOne.pop());
      cardsInPlay.unshift(playerTwo.pop());
      // Player Two Winner
    } else {
      roundWinner = "PlayerTwo";
      cardsInPlay.unshift(playerTwo.pop());
      cardsInPlay.unshift(playerOne.pop());
    }

    // Winner Cards
    if (roundWinner === "PlayerOne") {
      console.log("player one: ", playerOne);
      console.log("player two: ", playerTwo);
      console.log(cardsInPlay);
      playerOne.unshift(...cardsInPlay);
      console.log(
        `Player one got away with ${details(
          cardsInPlay
        )} | Player One plays a ${log(playerOne)} | Player Two plays a ${log(
          playerTwo
        )}`
      );
      
      cardsInPlay = [];
      score.One += 1;
    } else {
      console.log("player one: ", playerOne);
      console.log("player two: ", playerTwo);
      console.log(cardsInPlay);
      playerTwo.unshift(...cardsInPlay);
      console.log(
        `Player Two snatched ${details(cardsInPlay)} | Player One plays a ${log(
          playerOne
        )} | Player Two plays a ${log(playerTwo)}`
      );
      
      cardsInPlay = [];
      score.Two += 1;
    }
  }
}
rounds();

// Details of Round
function details(cardsInPlay) {
  let cardsInPlayRank = [];
  if (cardsInPlay.length > 0) {
    for (let i = 0; i < cardsInPlay.length; i++) {
      cardsInPlayRank.push(cardsInPlay[i].rank);
    }
    return cardsInPlayRank;
  } else {
    console.log("Game Over");
  }
}

// WAR!!!!
console.log("score: ", score);
console.log("player one: ", playerOne);
console.log("player two: ", playerTwo);
