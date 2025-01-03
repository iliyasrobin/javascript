//companies

const companies = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];

companies.shift(); //remove the first element
companies.splice(2, 1, "Ola"); //remove the 3rd element and add "Ola"
companies.push("Amazon"); //add "Amazon" to the end of the array

console.log(companies);
