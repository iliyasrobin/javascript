// Template Literals

// `` backticks
// ${} dollar sign and curly braces

console.log(`${1 + 1}`); //2

let sentence = `This is a template literal`;
// `` backticks are used to create template literals

console.log(sentence);
console.log(typeof sentence);

//example

//creating a object
let obj = {
  item: "pen",
  price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} dollars`;
console.log(output);
//here we can use $ to access the object properties
console.log(`The price of ${obj.item} is ${obj.price} dollars`);

//escaping characters
//  \ backslash

let str3 = `This is a backtick \n \t character`;
console.log(str3);

// escape characters counts only one character
console.log(str3.length);
