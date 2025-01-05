// Array Filter Method

// even element
let arr = [22, 34, 31, 57, 43, 87, 98];

let evenArr = arr.filter(
    (val) => {
  return val % 2 === 0;
}
);

console.log(evenArr);
