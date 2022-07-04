let editedPlayer = 0;

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

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closePlayerConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
closePlayerConfigBtn.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', submitPlayerConfig);