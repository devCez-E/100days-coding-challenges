const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const closePlayerConfigBtn = document.getElementById('cancel-config-btn');
const submitPlayerConfigBtn = document.getElementById('confirm-config-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
closePlayerConfigBtn.addEventListener('click', closePlayerConfig);
submitPlayerConfigBtn.addEventListener('click', submitPlayerConfig);