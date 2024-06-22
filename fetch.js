// JSON
const student = {
  name: "Sakib Khan",
  age: 45,
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
