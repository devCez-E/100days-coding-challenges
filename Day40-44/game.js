function startGameConfig(){
    if(players[0].name == '' || players[1].name == '') {
        alert('Please set custom player names for both player!');
        return;
    }
    
    for(const gameFieldElement of gameFieldElements){
        gameFieldElement.classList.remove('disabled');
        gameFieldElement.textContent = '';
    }
    
    for(const datas of gameData){
        datas[0] = 0;
        datas[1] = 0;
        datas[2] = 0;
    }
    
    gameIsOver = false;
    activePlayer = 0;
    currentRound = 1;
    gameOverConfigElement.firstElementChild.innerHTML = 'You won, <span id="winner-player-name">PLAYER NAME</span>!'
    gameOverConfigElement.style.display = 'none';

    activePlayerNameElement.textContent = players[0].name;
    gameConfigElement.style.display = 'block';
}

function clickBoard(event){
    if(event.target.textContent != '' && gameIsOver) return;

    const selectedField = event.target;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    const winnerId = checkForGameOver();
    if(winnerId != 0) endGame(winnerId);

    switchPlayer();
}

function switchPlayer(){
    if(activePlayer == 0) activePlayer = 1
    else activePlayer = 0

    activePlayerNameElement.textContent = players[activePlayer].name;
    currentRound += 1;
}

function checkForGameOver(){
    for(let i = 0; i < 3; i++){
        if(gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        )return gameData[i][0];
    }

    for(let i = 0; i < 3; i++){
        if(gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        )return gameData[0][i];
    }

    if(gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) return gameData[0][0];

    if(gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]) return gameData[2][0];

    if(currentRound > 8){
        return -1;
    }

    return 0;
}

function endGame(winnerId){
    gameIsOver = true;
    gameOverConfigElement.style.display = 'block';

    if(winnerId > 0){
        gameOverConfigElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
    }else{
        gameOverConfigElement.firstElementChild.textContent = "It's a draw!";
    }
}