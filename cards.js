
const suits = ["♠","♥","♦","♣"]
const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']


function getDeck() {
    let deck = new Array();
    for (let i = 0; i < suits.length; i++){
    for(let x = 0; x < values.length; x++){
    let card = {Value:values[x], Suit:suits[i]};
        deck.push(card);
      }   
    }
    return deck;
}

function shuffle(deck) {
    // for 500 times
    // switch the values of two random cards
    for (let i = 0; i < 500; i++ ){
        let topHalve = Math.floor((Math.random() * deck.length));
        let bottomHalve = Math.floor((Math.random() * deck.length));
        let cut = deck[topHalve];

        deck[topHalve] = deck[bottomHalve];
        deck[bottomHalve] = cut;

    }
}

// create a two player game of blackjack: self and house
// keep track of ID, and current score
// An array for players currnt hand will be added on to the player object
let players = new Array();
function createPlayers(num) {
    players = new Array();
    for (let i = 1; i <= num; i++ ){
        let hand = new Array();
        let player = {Name:'Player' + i, ID: i, Points: 0, Hand: hand};
    }
}



