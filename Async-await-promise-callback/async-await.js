//Async Await
// async function myFunc(){}
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataId);
      resolve("success");
    }, 2000);
  });
}

// async function getAllData(params) {
//   console.log("getting data 1");
//   await getData(1);
//   console.log("getting data 2");
//   await getData(2);
//   console.log("getting data 3");
//   await getData(3);
// }

// getAllData();

//IIFE
//type -1
(async function () {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
})();

//this time we don't need to call the function
