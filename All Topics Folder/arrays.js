//Arrays
//Collection of items

//Creating an array
let marks = [34, 23, 24, 93, 73];

//we can create an array of different types
// but it is not recommended
const info = ["soumya", 12, "abc"];

//Accessing an array
console.log(marks);

//Array length
console.log(marks.length);

let heroes = ["Ironman", "Thor", "Hulk", "Spiderman"];
console.log(heroes);

console.log(typeof heroes); //object

//Array Indices
console.log(marks[2]);
console.log(heroes[1]);
console.log(heroes[heroes.length - 1]);

//updating an array
heroes[1] = "Captain America";
console.log(heroes);

//Adding an element to the end of an array
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

//Adding an element to the beginning of an array
fruits.unshift("Orange");
console.log(fruits);

//Removing an element from the end of an array
fruits.pop();
console.log(fruits);

//Removing an element from the beginning of an array
fruits.shift();
console.log(fruits);

//Removing an element by index position
fruits.splice(1, 1);
console.log(fruits);

//Concatenating two arrays
let vegetables = ["Potato", "Tomato"];
let grocery = fruits.concat(vegetables);
console.log(grocery);

//Looping through an array
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

//for-of loop
for (let hero of heroes) {
  console.log(hero);
}

//example 2
let cities = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
for (let city of cities) {
  console.log(city.toUpperCase());
}

//forEach method
heroes.forEach(function (hero) {
  console.log(hero);
});

//forIn loop
for (let index in heroes) {
  console.log(index);
}

//Array of objects
const students = [
  {
    name: "Soumya",
    age: 23,
  },
  {
    name: "Rahul",
    age: 24,
  },
  {
    name: "Raj",
    age: 25,
  },
];

students.forEach(function (student) {
  console.log(student);
});

//Array methods
//indexOf
console.log(heroes.indexOf("Hulk"));

//includes
console.log(heroes.includes("Thor"));

//Array.isArray
console.log(Array.isArray(heroes));

//Array.from
let name = "Soumya";
console.log(Array.from(name));

//Array.sort
console.log(heroes.sort());

//Array.reverse
console.log(heroes.reverse());

//Array.filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

//Array.map
const doubleNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubleNumbers);

//Array.reduce
const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);
console.log(sum);
