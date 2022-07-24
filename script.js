// const { number, array } = require("prop-types");

// ---------------------------Leap Year Function------------------------
function leapYear(year){
    // let year = year;
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 !==0)){
        return console.log('Yes!! This is leap year');
    }else{
        return console.log('No!! Not leap year');
    }
}
// leapYear(1900);
// ---------------------------End of Leap Year Function------------------------

// --------------------Find Double Number to a list----------------------------
const number = [2,5,2,1,5,3,7,8,9,8,6,6];
const duplicate = number.filter(function(value,index,array){
    return array.indexOf(value) !== index
});
console.log(duplicate);
// --------------------End of Find Double Number to a list----------------------------

// --------------------Find Uniqe Number to a list----------------------------
const numbers = [2,5,2,1,5,3,7,8,9,8,6,6];
const uniq = numbers.filter(function(value,index,array){
    return array.indexOf(value) == index
});
console.log(uniq);
// --------------------End of Find Uniqe Number to a list----------------------------

//----------------------Alphabetic sort---------------------
let sentence = ['Jayed','Mamun','Rashed','Leyakot','Abdullah'];
console.log(sentence.sort());
//----------------------Alphabetic sort---------------------

// -----------------------Numeric sort Ascending-------------------------
const num = [2,5,2,1,5,3,7,8,9,8,6,6];
num.sort(function(a,b){
return a-b;
});
console.log(num);

// -----------------------Numeric sort-------------------------

// -----------------------Numeric sort Descending-------------------------
const desc = [2,5,2,1,5,3,7,8,9,8,6,6];
desc.sort(function(a,b){
return b-a;
});
console.log(desc);
// -----------------------Numeric sort-------------------------

// -------------------Big Sentence----------------------------

let vowel =['a','e','i','o','u'];

function checkVowel(sentences){
    let sentence = sentences.toLowerCase();
let count = 0;
let latters = Array.from(sentence);
latters.forEach(function(value){
if(vowel.includes(value)){
    count++;
}
});
return "vowel: " + count;
}

console.log(checkVowel('Assalamu alikum'));
// -------------------Big Sentence----------------------------

// -------------------Random Number Generate-----------------
function randomNum(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNum(3,7));
console.log(Math.random());
// -------------------Random Number Generate-----------------