//Conditional Statements

//If Statement

let age = 25;

if (age > 18) {
  console.log("You can vote");
}

if (age < 18) {
  console.log("You cannot vote yet");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}
console.log(color);

//If Else Statement

let mode2 = "light";
let color2;

if (mode2 === "dark") {
  color2 = "black";
} else {
  color2 = "white";
}
console.log(color2);

//Even Numbers Checker

let number = 10;

if (number % 2 === 0) {
  console.log(number, ": is even");
} else {
  console.log(number, " is odd");
}

//else if Statement

let age2 = 24;

if (age2 < 18) {
  console.log("You are a minor");
} else if (age2 >= 18 && age2 <= 65) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}

//Ternaary Operator

// condition ? true output: false output;

let age3 = 25;

age > 18 ? console.log("adult") : console.log("not adult");

//MDN Docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


//Switch Statement

//example from MDN Docs
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
