//Assignment Operator
// =, +=, -=, *=, /=, %=, **=

let a = 2;
console.log(a);

a += 4; // a = a+4
console.log(a);

a -=1; //a = a-4
console.log(a);

a *= 3; //a = a*3
console.log(a);

a /= 3; //a = a/3
console.log(a);

a %= 3; //a = a%3
console.log(a);

a **= 3; //a = a**3
console.log(a);


//Comparison Operators

let b = 2;
let c = 3;
let d = "2";

console.log(b==c); // == ; false
console.log(b==d); // true
// ekhane string er moddhe number thakle true hobe
console.log(b===d); // === false
// this is strictly checking; ekhane data type o check hoy

console.log(b!=c); // != ; true

console.log(b>c); //false
console.log(b<c); //true
console.log(b>=c); //false
console.log(b<=c); //true


//Logical Operators

// &&(and), ||(or), !(not)

let e = 23;
let f = 2;

let cond1 = a>b; //true
let cond2 = a===5; //false

console.log(cond1&&cond2); //false
console.log(cond1||cond2); //true
//cause here one condition is true
console.log(!cond1);
//a>b was true ; this logical not makes it false
// this means if you input 0, it will give 1
// if you give 1, it will give you 0






