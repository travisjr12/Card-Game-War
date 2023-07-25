  //looking for a 10 of spades
    function isSpadeOf10s(x, y) {
 if (typeof x != "string") {
throw new Error ('x must be a string');

  }
 return x + y;
}


// creates the types of cards, their rank for each suite (J,Q,K) and the actual number value
class Card {

  constructor(rank, suit, value) {

    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
//keeps track  of the the 52 cards
  constructor() {
    this._cards = [];
  };
//gets the value of the total of 52 cards
  get cards() {
    return this._cards;
  }
  //pulls together each suit, rank, and value and shuffles each one 
  buildDeck() {
    this._populate();
    this._shuffle();
    return this._cards;
  }
//gives meaning to cards 
  _populate() {
    const suits = ['♠', '♣', '♥', '♦'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //looping throught suits, then loop through each rank, value is the same as rank because mimics value then push the 52 cards for each new card ex. 7 of spade, 5 of hearts etc. 
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this._cards.push(new Card(ranks[j], suits[i], values[j]));
      }
    }
  }
  //method of shuffling cards to randomize it 
_shuffle() {
  if (this._cards.length > 0) {
    const shuffledDeck = this._cards.sort(() => Math.random() - 0.5)
    this._cards = [...shuffledDeck];
  }
}
}
//giving a player their name, score, and number of cards 26 for each player
class Player {
  
  constructor(name) {
    this._playerName = name;
    this._playerScore = 0;
    this._playerDeck = [];
  }
  //individually get from name, deck, and score 
  get name() {
    return this._playerName;
  }

  get deck() {
    return this._playerDeck;
  }

  get score() {
    return this._playerScore;
  }
  //makes sure the deck is an array and score is a number
  set deck(newDeck) {
if (Array.isArray(newDeck)) {
  this._playerDeck = newDeck;
}
  }
  set score(newScore) {
    if (!isNaN(newScore)){
      this._playerScore = newScore;
    }
  }
}
//the person dealing the card/deck to the players
class Dealer {
  
  constructor() {
    this._players = [];
    this._deck = [];
  }
//start displays the game master menue, then either press 1 or zero prompt displays the pop up bar of 1 and 0 
  start() {
    console.log("\t\t\t\t**** Game Master Menu ****")
    let input = prompt("0- exit; 1- play");
    while (input != '0') {
      switch (input) {
        case '0':
          exit;
          case '1':
            this._createGame();
            break;

      }
      input = prompt("0- exit; 1- play");
    }
  }
  //creates the player 1 and 2
  _createGame() {
    this._players[0] = new Player("PLayer 1");
    this._players[1] = new Player("PLayer 2");
// const cards builds the deck of 52 in the arrray
    const cards = new Deck().buildDeck();
//splits the cards with the slice method for each player
    this._players[0].deck = [...cards.slice(0,26)];
    this._players[1].deck = [...cards.slice(26,52)];
//player [0] or player 1 loops through each card and if their value is greater than player 2 or [1] add a point to score 
    console.log("\t\t\t\t**** Dealing Hands ****")
    for (let i = 0; i < this._players[0].deck.length; i++) {
      if (this._players[0].deck[i].value > this._players[1].deck[i].value) {
       this._players[0].score +=1;
//show cases what cards each player gets each round
        let winningHand = `${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`;
        //showcase the winner 
        console.log(`${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`);
        console.log(`Player 1 won with a ${winningHand}`);
        //now player 2 or [1] add poiint of their cards are greater than [0]
      } else if (this._players[0].deck[i].value < this._players[1].deck[i].value){
      this._players[1].score += 1;
        let winningHand = `${this._players[1].deck[i].rank} of ${this._players[1].deck[i].suit}`;
        //showcases in the console the same thing if declared the winner  and they win
        console.log(`${this._players[1].deck[i].rank} of ${this._players[1].deck[i].suit}`);
        console.log(`Player 2 won with a ${winningHand}`);
      //if neither player gets these if statements its a tie
      } else {
        console.log(`Round ${i + 1} - It's a tie!`);
      }

    }
    //diplays the information for who winsand logs into the console at the end of game 
    console.log("\t\t\t\t**** Hands Finished ****")
    if (this._players[0].score > this._players[1].score) {
      console.log(`${this._players[0].name.toUpperCase()} WON WAR with a score of ${this._players[0].score}`);
      
    } else if (this._players[0].score < this._players[1].score) {
      console.log(`${this._players[1].name.toUpperCase()} WON WAR with a score of ${this._players[1].score}`);
    } else {
      console.log("PLAYER 1 AND PLAYER 2 TIED")
    }
  }
}
//creates variable/const for the dealer and returns to the .start and runs the game onwards
const dealer = new Dealer();
dealer.start();
