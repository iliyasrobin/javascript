//printing first code of JavaScript
console.log("Hello JavaScript");

// let, var and const
//let : can't be re-declared but can be updated.
//var : can be re-declared and can be updated.
//const : can't be re-declared and can't be updated.

let age = 23;
// let age = 25; //error re declaring
age = 26; // no error updating
console.log(age);
var name = "Iliyas";
var name = "Robin" //no error re declaring
//but this is a problem
name = "Ahmed"; //no error updating
console.log(name);

const dad = "Younus ali";
// const dad = "Younus ali"; //error re declaring
// dad = "Md"; //error updating


//Data Type Check
console.log(typeof dad);
console.log(typeof name);
console.log(typeof age);

//Data Type
let a = 12;
let b = "Iliyas";
let c = 344.33;
let d = true;
let e = null;
let f; //undefined
let g = BigInt("123");
let h = Symbol("Hello!")
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);


// Declaring Object
const student = {
    fullName: "John",
    age: 25,
    cgpa: 3.6,
    isStudying : true
};

console.log(typeof student);

//accessing object

// method 1: obj.key
//method 2: obj["key"] or obj['key']

console.log(student.fullName);
console.log(student['isStudying']);

//updating object values

student['isStudying'] = false;
student['age'] = 30;
console.log(student['age']);

//const er object update kora jai



