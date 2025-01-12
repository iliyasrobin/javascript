//Class
class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new obj");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("stop");
  }

  //   setBrand(brand) {
  //     this.brand = brand;
  //   }
}

let fortuner = new ToyotaCar("fortuner", 10); //constructor parameter passing
//fortuner.setBrand("fortuner");

let lexus = new ToyotaCar("lexus", 15); //constructor parameter passing
//lexus.setBrand("lexus");
