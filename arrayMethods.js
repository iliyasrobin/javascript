//Array methods
// push() - adds an element to the end of an array
// pop() - removes the last element from an array
// toString() - converts an array to a string
// concat() - concatenates two arrays
// unshift() - adds an element to the beginning of an array
// shift() - removes the first element from an array
// join() - joins all elements of an array into a string
// slice() - extracts a section of an array and returns a new array
// splice() - adds or removes elements from an array
// sort() - sorts the elements of an array
// reverse() - reverses the order of the elements in an array
// indexOf() - returns the index of the first occurrence of an element in an array
// lastIndexOf() - returns the index of the last occurrence of an element in an array
// includes() - checks if an array contains a certain element

let fruits = ["Apple", "Banana"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.pop();

//which item was deleted
let deletedFruit = fruits.pop();
console.log(deletedFruit);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());

//concatenates two arrays
let vegetables = ["Cabbage", "Carrot"];
let cities = ["New York", "Los Angeles"];
let combinedArray = vegetables.concat(cities);
console.log(combinedArray);

//unshift() --> adds an element to the beginning of an array
let animals = ["Dog", "Cat"];
animals.unshift("Elephant");

//shift() --> removes the first element from an array
let animals2 = ["Dog", "Cat"];
animals2.shift();
console.log(animals2);

//slice() --> extracts a section of an array and returns a new array
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let citrus = fruits2.slice(1, 3);
console.log(citrus);

//splice() --> adds or removes elements from an array
// (add, remove, replace)
// splice(start index, howmany, item1, ....., itemX)
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(1, 0, "Lemon", "Kiwi");
console.log(fruits3);

//sort() --> sorts the elements of an array
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.sort();
console.log(fruits4);

//reverse() --> reverses the order of the elements in an array
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.reverse();
console.log(fruits5);

//indexOf() --> returns the index of the first occurrence of an element in an array
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits6.indexOf("Apple");
console.log(a);

//lastIndexOf() --> returns the index of the last occurrence of an element in an array
let fruits7 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let b = fruits7.lastIndexOf("Apple");
console.log(b);

//includes() --> checks if an array contains a certain element
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let c = fruits8.includes("Mango");
console.log(c);
