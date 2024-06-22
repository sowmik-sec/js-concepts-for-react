const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 320000, brand: "iPhone", color: "black" },
  { name: "watch", price: 2000, brand: "casio", color: "white" },
  { name: "sunglass", price: 200, brand: "ribon", color: "black" },
  { name: "camera", price: 32000, brand: "canon", color: "silver" },
];

const brands = products.map((product) => product.brand);
console.log(brands);

const price = products.map((product) => product.price);
console.log(price);
