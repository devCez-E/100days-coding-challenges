// Calculate Sum
const calculateSumButtonElement = document.querySelector('#calculator button');
const userNumber = document.getElementById('user-number');
const calculateSum = document.getElementById('calculated-sum');

calculateSumButtonElement.addEventListener('click', calSum);

function calSum(){
    let sum = 0;

    for(let i = 0; i <= Number(userNumber.value); i++){
        sum += i;
    }

    calculateSum.textContent = sum;
    calculateSum.style.display = 'block';
}

// Highlight Link
const highlightButtonElement = document.querySelector('#highlight-links button');

highlightButtonElement.addEventListener('click', highlightLink)

function highlightLink(){
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchor of anchorElements){
        anchor.classList.add('highlight');
    }
}

// Display user data
const displayButtonElement = document.querySelector('#user-data button');
displayButtonElement.addEventListener('click', displayUserData)

const dummyUserData = {
    firstName : 'Max',
    lastName : 'Schwarzmuller',
    age : 32
};

function displayUserData(){
    const orderList = document.getElementById('output-user-data');

    orderList.innerHTML = '';

    for(const data in dummyUserData){
        const list =  document.createElement('li');
        list.textContent = data.toUpperCase() + " : " + dummyUserData[data];
        orderList.append(list);
    }
}

// Statistics / Roll the Dice
const rollButtonElement = document.querySelector('#statistics button');
rollButtonElement.addEventListener('click', deriveNumberOfDiceRolls)

function rollDice(){
    return Math.floor(Math.random() * 6) + 1; // Math.floor() : 5.64 -> 5
}

function deriveNumberOfDiceRolls(){
    const targetNumberElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();

        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + " : " + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const ouputTotalRollsElement = document.getElementById('output-total-rolls');
    const ouputTargetNumberElement = document.getElementById('ouput-target-number');

    ouputTargetNumberElement.textContent = enteredNumber;
    ouputTotalRollsElement.textContent = numberOfRolls;
}