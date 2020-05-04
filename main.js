// Global Variables
const suit = ["hearts", "spades", "clubs", "diamonds"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deckOfCards = [];
let randomDeck = [];
let playerOne = [];
let playerTwo = [];
let cardsInPlay = [];
let roundWinner = "";
let roundsplayed = "";
let score = {
  One: 0,
  Two: 0,
};

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

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

// Randomize the deckOfCards array
function randomizeDeck() {
  let deck = createDeck();
  for (let i = 0; i < deck.length; i++) {
    let rand = deck[Math.floor(Math.random() * deck.length)];
    randomDeck.push(rand);
  }
}

// Assign Deck to players
function assignDeck() {
  playerOne = randomDeck.splice(0, 26);
  playerTwo = randomDeck.splice(0, 26);
}

// Returns Value of a Card
function topCard(arr) {
  if (arr[arr.length - 1]) {
    return arr[arr.length - 1].value;
  }
  return 0;
}
// Returns Rank of a Card
function log(arr) {
  if (arr[arr.length - 1]) {
    return arr[arr.length - 1].rank;
  }
  return "No Cards Remaining";
}

// Rounds of Game
function rounds() {
  while (playerOne.length < 52 && playerTwo.length < 52) {
    // War Situation
    if (topCard(playerOne) === topCard(playerTwo)) {
      popCardWar();
      continue;
    } else if (topCard(playerOne) > topCard(playerTwo)) {
      roundWinner = "PlayerOne";
      popCardOne();
    } else {
      roundWinner = "PlayerTwo";
      popCardTwo();
    }

    // Winner Cards
    if (roundWinner === "PlayerOne") {
      playerOneWinner();
    } else {
      playerTwoWinner();
    }
  }
  gameReview();
}

// Player One Winner Pop
function popCardOne() {
  if (topCard(playerOne)) {
    cardsInPlay.unshift(playerOne.pop());
  }
  if (topCard(playerTwo)) {
    cardsInPlay.unshift(playerTwo.pop());
  }
}

// Player Two Winner Pop
function popCardTwo() {
  if (topCard(playerTwo)) {
    cardsInPlay.unshift(playerTwo.pop());
  }

  if (topCard(playerOne)) {
    cardsInPlay.unshift(playerOne.pop());
  }
}

// War Time Pop
function popCardWar() {
  cardsInPlay.unshift(
    ...playerOne.splice(playerOne.length - 3),
    ...playerTwo.splice(playerTwo.length - 3)
  );
  console.log(
    `Whose gonna win these cards! Player One places a ${log(
      playerOne
    )} | Player Two places a ${log(playerTwo)}`
  );
  console.log(cardsInPlay.map(card => card.rank));
}

// Player One Wins
function playerOneWinner() {
  playerOne.unshift(...cardsInPlay);
  roundsplayed++;
  if (playerOne.length > 0 && playerTwo.length > 0) {
    console.log(
      `Player one got away with ${details(
        cardsInPlay
      )}  | End of round ${roundsplayed} | Player One plays a ${log(
        playerOne
      )} | Player Two plays a ${log(playerTwo)}`
    );
  } else {
    console.log("Player One Wins");
  }
  cardsInPlay = [];
  score.One += 1;
}

// Player Two Wins
function playerTwoWinner() {
  playerTwo.unshift(...cardsInPlay);
  roundsplayed++;
  if (playerOne.length > 0 && playerTwo.length > 0) {
    console.log(
      `Player Two snatched ${details(
        cardsInPlay
      )} | End of round ${roundsplayed} | Player One plays a ${log(
        playerOne
      )} | Player Two plays a ${log(playerTwo)}`
    );
  } else {
    console.log("Player Two Wins");
  }
  cardsInPlay = [];
  score.Two += 1;
}

// Details of Round
function details(cardsInPlay) {
  return cardsInPlay.map((card) => card.rank);
}

// Overview of Game
function gameReview() {
  console.log("Score: ", score);
  console.log(
    "Player One Cards: ",
    playerOne.map((card) => card.rank)
  );
  console.log(
    "Player Two Cards: ",
    playerTwo.map((card) => card.rank)
  );
}
