//For Loop

/*
for(initialization;  stopping condition; updation(increment/decrement) ){
    //code
  }
*/

/*
//Print Hello World 5 times

for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

//Print numbers from 1 to 10

for (let count = 1; count <= 10; count++) {
  console.log("count: ", count);
}
console.log("Loop has Ended");

*/

//Calculate sum of numbers from 1 to n

let sum = 0;
let end = 5;

for (let i = 1; i <= end; i++) {
  sum = sum + i;
  //or sum += i;
}
console.log("Sum: ", sum);

//console.log(i); //Error: i is not defined
//if we use var i in for loop then it will not give error



