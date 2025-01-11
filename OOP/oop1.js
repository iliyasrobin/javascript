//Prototype

//function defining in different ways in object
const employee = {
  calcTax1() {
    console.log("tax is 10% ");
  },

  calcTax2: function () {
    console.log("tax is 20%");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax1: function () {
    console.log("tax is 30%");
  },
  //now this function will be executed instead of prototype
};

//connecting prototype
karanArjun.__proto__ = employee;
//now karanArjun will have calcTax1 and calcTax1 functions.
