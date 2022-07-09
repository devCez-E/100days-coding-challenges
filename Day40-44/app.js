gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorElement = document.getElementById('config-error');
const gameConfigElement = document.getElementById('active-game');
const gameOverConfigElement = document.getElementById('game-over');
const activePlayerNameElement = document.getElementById('active-player-name');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closePlayerConfigBtn = document.getElementById('cancel-config-btn');
const startGameBtn = document.getElementById('start-btn');

const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
closePlayerConfigBtn.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', submitPlayerConfig);
startGameBtn.addEventListener('click', startGameConfig);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', clickBoard)
}