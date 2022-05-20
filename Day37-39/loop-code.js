for (let i = 0; i < 5; i++){
    console.log(i);
}

// FOR ARRAY
const users = ['Max', 'Anna', 'Joel'];
for(const user of users){
    console.log(user);
}

// for of -> for
for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}

// FOR OBJECT
const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

for(const key in loggedInUser){
    console.log(key + " is " + loggedInUser[key]);
}

// While
let isFinished = false;

while(!isFinished){
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');