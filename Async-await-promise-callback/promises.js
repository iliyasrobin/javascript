//Promises

//let promise = new Promise((resolve, reject)=> {})

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("success");
//   //reject("some error occured");
// });

//three states of promise
//pending
//fullfilled
//reject

//example
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data ", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let promise = getData(123);
// console.log(promise);

//how to use the promises

// .then() & .catch()

//promise.then((res)=>{})
//promise.catch((err)=>{})

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject(" network error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("Rejected", err);
});
