let paragraphElement = document.querySelector('p');
paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');
inputElement.addEventListener('input', retrieveUserInput);

let cnt = 0;

function changeParagraphText(){
    cnt++;
    paragraphElement.textContent = inputElement.value + " " + cnt + " Clicked! ";
}

function retrieveUserInput(event){
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    //let enteredText = event.data; => Diffrent
    //console.log(enteredText);
    paragraphElement.textContent = enteredText;
    //console.log(event);
}