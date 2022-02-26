


function createPlayers() {
    document.getElementById('players').innerHTML = '';
    for (let i = 0; i < players.length; i++){
        let div_player = document.createElement('div');
        let div_playerid = document.createElement('div');
        let div_hand = document.createElement('div');
        let div_points = document.createElement('div')

        div_points.className ='points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = DOMPurify.sanitize(players[i].ID)
        div_playerl.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}


function startblackjack() {
    document.getElementById('btnStart').value = 'Restart';
    document.getElementById("status").style.display ="none";
    //deal 2 cards to every player object
    currentPlayer = 0;
    createDeck();
    shuffle();
    createPlayers(2);
    createPlayersUI();
    dealHands();
    document.getElementById('player_' + currentPlayer).classList.add('active');''
}

function dealHands() {
    //alternate handing cards to each player
    //2 cards each
    for (let i = 0; i < 2; i++){
        for (let x =0; x < players.length; x++){
            let card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }
    updateDeck();
}

function renderCard(card, player){
    let hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
    let el = document.createElement('div');
    el.className = 'card';
    el.innerText = card.Suit + '' + card.Value;
    return el;
}

let currentPlayer = 0;
function hitMEe() {
    //pop a card freom the deck to the current player
    //check if current player new points are over 21

let card = deck.pop();
players[currentPlayer].Hand.push(card);
renderCard(card, currentPlayer);
updatePoints();
check();
}

function check() {
    if (players[currentPlayer].Points > 22){
        document.getElementById('statu').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
    }
}

function stay() {
    //move on to next player, if any
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }

    else {
        end();
    }
}

function end() {
    let winner = -1;
    let score = 0;

    for(let i = 0; i < players.length; i++){
        if (players[i].Points > score && players[i].Points < 22){
            winner = i;
        }
        score = players[i].Points;
    }
    document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
}

