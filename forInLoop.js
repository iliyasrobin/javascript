//For In Loop

//helps object iteration

//syntax
/* for (object_key in object_variable) {
    statements
} */

//Example

var student = {
  name: "John",
  age: 30,
  city: "New York",
  cgpa: 3.5,
  isPassed: true,
};

for (let key in student) {
  console.log("key name", key, "values", student[key]);
}
