//nested if else

let age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}

//nested loop
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str = str + j;
  }
  console.log(i, str);
}

//callback nesting


//callback hell
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
//nested callbacks or callback hell
getData(1, () => {
  console.log("getting data 2");
  getData(2, () => {
    console.log("getting data 3");
    getData(3, () => {
      console.log("getting data 4");
      getData(4);
    });
  });
});
