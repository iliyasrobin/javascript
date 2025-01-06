//toppers 90+
const marks = [24, 45, 77, 95, 92, 90, 94];
let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);

//sum all numbers of array using reduce method

let n = prompt("enter a number: ");
let arr = [];

//storing data in a array
for (let i = 1; i < n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + sum;
});
console.log(sum);

//factorial of n

let factorial = arr.reduce((res, curr) => {
  return res * sum;
});
console.log(factorial);
