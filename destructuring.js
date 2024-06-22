// 1. array destructuring
const numbers = [42, 64];

const [x, y] = numbers;
console.log(x);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(3, 51));

// const student = {
//     name: "Sakib Khan",
//     age: 45,
//   };

// object destructuring
const { name, age } = { name: "alu", age: 14 };

const employee = {
  ide: "VS code",
  designation: "developer",
  machine: "hp",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 70,
    address: "Bhurungamari",
    drink: "water",
  },
};

const { ide } = employee;

const { address } = employee.specification;
console.log(address);
