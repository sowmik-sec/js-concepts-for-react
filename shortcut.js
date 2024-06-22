// 'almas', 6, true, {}, []
// '', 0, false, null, undefined

let myVar = 6;
// check truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
}

const money = 80;
let food;

if (money > 100) {
  food = "biryani";
} else {
  food = "cha biscuit";
}

// ternary
let food1 = money > 100 ? "biryani" : "cha biscuit";

let drink = money > 100 && myVar > 100 ? "Lal pani" : "sada pani";

const num1 = 42;
console.log(num1);
const numStr = num1 + "";

const input = "6432";
const inputNum = +input;
console.log(inputNum);

const showUser = () => console.log("display");
const hideUser = () => console.log("hide");
let isActive = false;
isActive && showUser();

isActive || hideUser();

isActive = !isActive;
