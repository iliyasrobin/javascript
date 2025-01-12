//super keyword
// class Person {

//   constructor() {
//     this.species = "homo sapiens";
//   }

//   eat() {
//     console.log("Eat");
//   }
// }

// class Engineer extends Person {

//   constructor(branch) {
//     super(); //to invoke parent class constructor
//     this.branch = branch;
//   }

//   work() {
//     console.log("solve problems");
//   }
// }

// let iliyas = new Engineer("cse");

class Person {
  constructor(name) {
    this.name = name;
    this.species = "homo sapiens";
  }

  eat() {
    console.log("Eat");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);
  }

  work() {
    console.log("solve problems");
  }
}

let iliyas = new Engineer("iliyas");
