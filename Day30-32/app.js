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

alert(hobbies[1]);
alert(job.title);

let adultYears;
//adultYears = age - 18;
//caculateAdultYears();
adultYears = caculateAdultYears(age);
alert(adultYears);

age = 45;
//adultYears = age - 18;
//caculateAdultYears();
adultYears = caculateAdultYears(age);
alert(adultYears);

/*
function caculateAdultYears(){
    adultYears = age - 18
}*/

function caculateAdultYears(userAge){
    return userAge - 18
}