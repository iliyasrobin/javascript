// Functions

//defining function

/*
function functionNme() {
    //do some work
}

//or

function functionNme(paramert1, paramert2) {
     //do some work
}

*/

function myFunction() {
  console.log("Hello from myFunction");
  console.log("We are learning JS functions");
}

//calling function / invoking function
//functionName();

myFunction();

//function with parameters
function greet(name, num) {
  //parameter receiving
  console.log("Hello " + name + " " + num);
}

greet("John", 100); //argument passing

//function with sum

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);

//function with return
function add(a, b) {
  //local variable a,b
  //local variable will be destroyed after function execution
  //blcok scope
  return a + b;
  //after return statement, function will not execute
}

let result = add(10, 20);
console.log(result);

//Arrow function

//defining arrow function
/*
let functionName = () => {
    //do some work
}

//or

let functionName = (param1, param2) => {
    //do some work
}
*/

//example

const arrowSum = (a, b) => {
  return a + b;
};

let arrowResult = arrowSum(10, 20);
console.log(arrowResult);
