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
};

//connecting prototype
karanArjun.__proto__ = employee;
