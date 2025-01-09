let btn1 = document.querySelector("#btn1");

// //node.event = () =>{ //do some work}
// btn1.onclick = () => {
//   console.log("btn 1 was clicked handler 1");
// };

// btn1.onclick = () => {
//   console.log("btn 1 was clicked handler 2");
// };
//handler 2 will be printed

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log(" you are inside the div");
// };

// //event object
// //node.event = (e) =>{ //do some work}

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// };

//event listeners
//node.addEventListener(event, callback)
//node.removeEventListener(event, callback)
// btn1.addEventListener("click", (e) => {
//   console.log(e);
//   console.log("button was clicked in event listeners handler 1");
// });
// btn1.addEventListener("click", () => {
//   console.log("button was clicked in event listeners handler 2");
// });
//both handler wil be printer

//remove

btn1.addEventListener("click", (e) => {
  console.log(e);
  console.log("button was clicked in event listeners handler 1");
});
btn1.addEventListener("click", () => {
  console.log("button was clicked in event listeners handler 2");
});
const handler3 = () => {
  console.log("button was clicked in event listeners handler 3");
};
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () => {
  console.log("button was clicked in event listeners handler 4");
});

btn1.removeEventListener("click", handler3);
