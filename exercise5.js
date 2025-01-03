/*
//average marks of students
const marks = [80, 70, 90, 85, 95];
let sum = 0;



//for loop
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
let average = sum / marks.length;
console.log(average);


//for of loop
for (let mark of marks) {
  //sum += mark;
  sum = sum + mark;
}
let average = sum / marks.length;
console.log(average);

//forEach method
sum = 0;
marks.forEach(function (mark) {
  sum = sum + mark;
});
average = sum / marks.length;
console.log(average);

*/

//exercise 2

let itemsPrice = [100, 200, 300, 400, 500];
let discount = 0.1;
let discountedPrice = [];

//for of loop
for (let price of itemsPrice) {
  discountedPrice.push(price - price * discount);
}
console.log(discountedPrice);
