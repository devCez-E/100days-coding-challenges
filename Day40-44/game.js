function startGameConfig(){
    if(players[0].name == '' || players[1].name == '') {
        alert('Please set custom player names for both player!');
        return;
    }
    
    for(const gameFieldElement of gameFieldElements){
        gameFieldElement.classList.remove('disabled');
        gameFieldElement.textContent = '';
    }
    
    activePlayerNameElement.textContent = players[0].name;
    gameConfigElement.style.display = 'block';
    activePlayer = 0;
}

function clickBoard(event){
    if(event.target.textContent != '') return;

    const selectedField = event.target;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}

function switchPlayer(){
    if(activePlayer == 0) activePlayer = 1
    else activePlayer = 0

    activePlayerNameElement.textContent = players[activePlayer].name;
}