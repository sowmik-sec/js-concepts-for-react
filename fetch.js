// JSON
const student = {
  name: "Sakib Khan",
  age: 45,
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array

const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 320000, brand: "iPhone", color: "black" },
  { name: "watch", price: 2000, brand: "casio", color: "white" },
  { name: "sunglass", price: 200, brand: "ribon", color: "black" },
  { name: "camera", price: 32000, brand: "canon", color: "silver" },
];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create anew array without the phone
const remaining = products.filter((p) => p.name !== "phone");

console.log(remaining);
