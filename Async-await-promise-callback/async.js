// set timeout

console.log("one"); //1
console.log("two"); //2

setTimeout(() => {
  //5
  console.log("hello");
}, 4000); //miliseconds //1s = 1000ms
// this will print at last

console.log("three"); //3
console.log("four"); //4
