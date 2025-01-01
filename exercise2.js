//alert("hello world");

//divisible by 5 or not
//taking user input using prompt
let num = prompt("Enter a number: ");

if (num % 5 === 0) {
  alert("Divisible by 5");
} else {
  alert("Not divisible by 5");
}

//grade of student

let marks = prompt("Enter your marks: ");
let grade;
if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 70 && marks <= 79) {
  grade = "B";
} else if (marks >= 60 && marks <= 69) {
  grade = "C";
} else if (marks >= 50 && marks <= 59) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your grade is: " + grade);
