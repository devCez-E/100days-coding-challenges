/*let age = 32
let greetingText = "Hi I'm Max!";
alert(greetingText);
alert(greetingText);
greetingText = "Hi I'm really Max!";
alert(greetingText);
alert(age);
*/

let age = 32;
let userName = 'Max';
/*let hobby1;
let hobby2;*/
let hobbies = ['Sport', 'Cooking', 'Reading'];
let job = {
    title:'Developer', 
    place:'New York', 
    salary: 50000
};

//alert(hobbies[1]);
//alert(job.title);
console.log(hobbies[1]);
console.log(job.title);

let adultYears;
//adultYears = age - 18;
//caculateAdultYears();
adultYears = caculateAdultYears(age);
//alert(adultYears);
console.log(adultYears);

age = 45;
//adultYears = age - 18;
//caculateAdultYears();
adultYears = caculateAdultYears(age);
//alert(adultYears);
console.log(adultYears);

/*
function caculateAdultYears(){
    adultYears = age - 18
}*/

function caculateAdultYears(userAge){
    return userAge - 18
}


let person = {
    name:'Max',             // Property
    greet(){                // Method
        alert('Hello!');
    }
};

console.log(person.greet());