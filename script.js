// const { number, array } = require("prop-types");

// const { func } = require("prop-types");

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
// console.log("Dublicate: "+duplicate);

// --------------------End of Find Double Number to a list----------------------------

// --------------------Find Uniqe Number to a list----------------------------
const numbers = [2,5,2,1,5,3,7,8,9,8,6,6];
const uniq = numbers.filter(function(value,index,array){
    return array.indexOf(value) == index
});
// console.log("Uniqe: "+uniq);

// --------------------End of Find Uniqe Number to a list----------------------------

//----------------------Alphabetic sort---------------------
let sentence = ['Jayed','Mamun','Rashed','Leyakot','Abdullah'];
// console.log(sentence.sort());

//----------------------Alphabetic sort---------------------

// -----------------------Numeric sort Ascending-------------------------
const num = [2,5,2,1,5,3,7,8,9,8,6,6];
num.sort(function(a,b){
return a-b;
});
// console.log(num);

// -----------------------Numeric sort-------------------------

// -----------------------Numeric sort Descending-------------------------
const desc = [2,5,2,1,5,3,7,8,9,8,6,6];
desc.sort(function(a,b){
return b-a;
});
// console.log(desc);

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

// console.log(checkVowel('Assalamu alikum'));

// -------------------Big Sentence----------------------------

// -------------------Random Number Generate-----------------
function randomNum(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(randomNum(3,7));
// console.log(Math.random());

// -------------------Random Number Generate-----------------

//--------------------Prime Number Generate------------------

// function primeNumber(num =[1,5,5,7,9,8]){

//     for(let i = 0; i > num.length;i++){

//         let result = [];
//         result = num.map((val => val % i == 0?false:val));
//         // result.push()
//     }
//     return result
// }

// console.log(primeNumber);

//--------------------Prime Number Generate------------------ 

// ------------------------------summation of a serial number-------------------
function addUp(num) {
    let sum = (num*(num+1))/2;
    return sum;
}
// console.log(addUp(600));
// ------------------------------ End Adding a serial number-------------------

// ----------edabit.com-----------
// -------------------- Convert Decimal to Binary/Octal/Hexa. Change only base 2 to 8 or 16 ------------------------------------
function binary(decimal) {
    return decimal.toString(2)
}

// console.log(binary(1300));
// --------------------End Convert Decimal to Binary------------------------------------

// ---------------------Which Function Returns the Larger Number?------------------
function whichIsLarger(f, g) {
    return f()>g()?'f':f()==g()?'neither':'g'
}
// ---------------------End Which Function Returns the Larger Number?------------------

// -----------------------------Summation of a serials number. Number of Squares in an N * N Grid---------------------

function numberSquares(n) {
return (n*(n+1)*(2*n+1))/6
}
// console.log(numberSquares(5));
// -----------------------------End Number of Squares in an N * N Grid---------------------

// -----------------for time match RegEx------------------------------
// For 09:00

const REGEXP = /\b([0-1][0-9]|[2][0-3])\b:\b([0-5][0-9])\b/g;
const REGEXP1 = /\d\d:\d\d/;
const REGEXP2 = /\d{2}:\d{2}/;
// -----------------for time match RegEx------------------------------

// -----------------2 to the power y. Power math-----------------------
function shiftToLeft(x, y) {
	return x * 2**y;
}
// -----------------Power math-----------------------

// -----------------Array summation value-----------------------
function seriesResistance(arr) {
	let result=0;
for(let i = 0; i<arr.length; i++){
	result += arr[i];
}
	return result <= 1 ? result+' ohm':result+' ohms';
}


// function addSeries(arr){

//     arr.reduce((a,b)=> {
//         a += b ;
//         return a <= 1 ? `${a} ohm`: `${a} ohms`;
//     });
        
// }

function addSeries(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return (sum > 1) ? sum + " ohms" : sum + " ohm";
}

// console.log(addSeries([16, 3.5, 6]));
// console.log(seriesResistance([16, 3.5, 6]));
// -----------------Array adding value-----------------------


// =-------------------Date object to day, month. Only true if date is 26 march---------------
function timeForMilkAndCookies(date) {

    let month = date.getMonth();
   let day = date.getDate();

   if(month === 2 && day === 26)
       return true
   else
       return false
}
// console.log(timeForMilkAndCookies(new 
//     Date(2021,11,24)));
// =-------------------Date object to day, month---------------


// Puzzle Pices. Two array adding where thay are same length

function puzzlePieces(a1, a2) {
	if (a1.length !== a2.length) {
		return false;
	}
	
	const sums = [];
	for (let i = 0; i < a1.length; i++) {
		sums.push(a1[i] + a2[i]);
	}
	
	for (let i = 0; i < sums.length; i++) {
		if (sums[i] !== sums[0]) {
			return false;
		}
	}
	
	return true;
}

// console.log(puzzlePieces([1,2,3,4,5],[5,4,3,2,1]));

// End Puzzle Pices. Two array adding where thay are same length

// Multiplying with curry function----------------------

const multiply = arr => num => arr.map(x => x * num);  //Complete function 
// --------------------------------------------------

function multiply1 (arr){                              //Same function in another way
    return function factor(int){
        return arr.map(x => x * int)
	}
}
// ---------------------End Multiplying with curry function----------------------------

// ---------------------Find out Smallest and Biggest Number------------------------------------

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return [min, max];
  }

//   -------------------------------------------

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

// ------------------------------------------------

function minMax(arr) {
    arr.sort(function(a, b){return a-b});
    return [arr[0], arr[arr.length-1]];
    
  }

// ---------------------End Find out of Smallest and Biggest Number------------------------------------

// ---------------------Tile teamwork tactice----------------------------------------------------------
function possibleBonus(a, b) {
	return a < b && (b - a) <= 6 ? true : false 
}
// ---------------------Tile teamwork tactice----------------------------------------------------------
// ---------------------Create a power----------------------------------------------------------
function circuitPower(voltage, current) {
	return voltage * current; //calculate power
}

// ---------------------Create a power----------------------------------------------------------
// ---------------------=Bitwise function----------------------------------------------------------
function bitwiseAND(n1, n2) {
	return (n1 & n2);
}

function bitwiseOR(n1, n2) {
	return (n1 | n2);
}

function bitwiseXOR(n1, n2) {
	return (n1 ^ n2);
}
// ---------------------End of bitwise function----------------------------------------------------------

// --------------------- 2 to the power er sathe multiply function----------------------------------------------------------
function shiftToLeft(x, y) {
	return x * 2**y
}
// ---------------------End 2 to the power er sathe multiply function----------------------------------------------------------

// ----------------------------Summation all number in an array--------------------------
function summation(a){
  a.reduce(function(a,b) {
    return a+b;
});
}
// ----------------------------Summation all number in an array--------------------------

// -----------------Reverse Now------------------
function reverseString(str){
    // return "Reverse Number: " + Number(String(str).split('').reverse().join(''));
    return "Reverse Result: " + str.split('').reverse().join('');

}
function reverseNumber(str){
    return "Reverse Number: " + Number(String(str).split('').reverse().join(''));

}
console.log(reverseString('123466789'));
console.log(reverseNumber(123456789));


let rev = 0;
let num1 = 123456;
let lastDigit;

while(num1 != 0){
	lastDigit = num1 % 10;
  rev = rev * 10 + lastDigit;
  num1 = Math.floor(num1/10);
}

console.log("Reverse number : " + rev);

// -----------------Reverse Now------------------