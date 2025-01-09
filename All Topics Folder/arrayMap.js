// Array Map Method
//used to create a new array

//define

//arr.map(callbackFunc(value, index, array))

let numbers = [67, 25, 48, 42];

numbers.map((val) => {
  console.log(val);
});

//coping array
let newArr = numbers.map((val) => {
  return val;
});
console.log(newArr);
