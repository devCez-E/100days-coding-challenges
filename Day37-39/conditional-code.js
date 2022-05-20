const myName = 'Max';

if(true){
    console.log('Hello!');
}

let isLoggedIn = true;

console.log(5 == 5);
console.log('5' == 5);
console.log(5 === 5);
console.log('5' === 5);

console.log(5 != 5);
console.log('5' != 5);
console.log(5 !== 5);
console.log('5' !== 5);

console.log(2 === 2 || 2 === 3 && 5 === 6);
console.log(2 === 2 || 2 === 2 && 5 === 6);
console.log((2 === 2 || 2 === 2) && 5 === 6);

if(myName ==='Max'){
    console.log('Hello!');
}


if(!isLoggedIn){
    console.log('User is Not logged in!');
} else{
    console.log('User is logged in!');
}


const enteredUserName = '';

if(enteredUserName){
    console.log('Input is valid!');
}


const enteredUserNumber = 0;

if(enteredUserNumber){
    console.log('Input is valid!');
}