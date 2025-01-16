//Promise Chain

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("success");
//     }, 4000);
//   });
// }

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
// console.log("fetching data 1.....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data 2.....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

//or

// console.log("fetching data 1.....");
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("fetching data 2.....");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

//example

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataId);
      resolve("success");
    }, 2000);
  });
}

//promise chain
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

//or
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
