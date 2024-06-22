const numbers = [89, 35, 88, 12];
const student = {
  name: "Sakib Khan",
  age: 45,
};
//1. template string
const about = `My Name is ${student.name} age is ${student.age} has number ${numbers[2]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;

const addSixtyFive = (num) => num + 65;

const isEven = (x) => x % 2 === 0;

const addThree = (a, b, c) => a + b + c;

const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread operator

const newNumbers = [...numbers];
newNumbers.push(99);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 66];
