// Array Reduce Method

let arr = [1, 2, 3, 4];

//result
const output = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);

//largest element

const output2 = arr.reduce(
    (prev, curr) => {
  return prev ? curr : curr;
}
);
console.log(output2);
