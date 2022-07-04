function openPlayerConfig(event){
    editedPlayer = +event.target.dataset['playerid'];
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function submitPlayerConfig(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    players[editedPlayer-1].name = enteredPlayername;

    closePlayerConfig();
}