// 'almas', 6, true, {}, []
// '', 0, false, null, undefined

const myVar = 6;
// check truthy
if (myVar) {
  myVar *= 100;
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
