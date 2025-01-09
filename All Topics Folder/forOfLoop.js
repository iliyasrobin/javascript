//For Of Loop

//syntax

/*
//helps in Strings and Arrays 

for (variable of String_Variable) {
    //code block to be executed
}

*/

//Example

let str = "Hello";
let size = 0;

for (let i of str) {
  //iterator -> characters
  console.log("i = ", i);
  size++;
}

console.log("String Size = ", size);
