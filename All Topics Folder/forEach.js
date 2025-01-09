//for Each
//forEach is a method that executes a provided function once for each array element.
//forEach does not return anything.
//forEach is faster than map.
//forEach is used to execute a function for each element in the array.
//forEach is not chainable.
//forEach is not suitable for asynchronous operations.
//forEach is not suitable for transforming an array into another array.
//forEach is not suitable for filtering an array.
//forEach is not suitable for finding a value in an array.
//forEach is not suitable for checking if all elements in an array pass a test.
//forEach is not suitable for checking if any elements in an array pass a test.
//forEach is not suitable for checking if an array includes a value.
//forEach is not suitable for summing up an array.
//forEach is not suitable for flattening an array.
//forEach is not suitable for reducing an array.

//defining
//arrayName.forEach(callback(callback function))
//callback function is executed for each element in the array.

//functions can be send as a parameter to another function.

//example
let arr = [
  "dharani",
  "dhaka",
  "sylhet",
  "rajshahi",
  "khulna",
  "barishal",
  "rangpur",
  "mymensingh",
];

/*

//using normal function

arr.forEach(function printVal(val) {
  console.log(val.toUpperCase());
});

//using arrow function
arr.forEach((val) => {
  console.log(val);
});


*/
//forEach with parameters
//forEach can take three parameters
//value
//index
//array
arr.forEach(function printVal(val, idx, arr) {
  console.log(val, idx, arr);
});

//forEach with object
let obj = {
  name: "dharani",
  age: 23,
  city: "dhaka",
};

Object.keys(obj).forEach(function printVal(val) {
  console.log(obj[val]);
});

//callback function
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let calcSquare = (num) => {
  console.log(num * num);
};

nums.forEach(calcSquare);
