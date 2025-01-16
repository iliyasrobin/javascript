//Promise Chain

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data 1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 2.....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

//in this case both will fetch at same time

//promise chain
console.log("fetching data 1.....");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data 2.....");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});
