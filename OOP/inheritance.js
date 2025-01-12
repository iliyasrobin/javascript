//Inheritance

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

class Person {

  constructor() {
    this.species = "homo sapiens";
  }

  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("sleep");
  }
  
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  //method overriding
  work() {
    console.log("solve problems");
  }
}

let iliyas = new Engineer();

iliyas.eat();
iliyas.sleep();
