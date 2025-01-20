//Fetch API
//Application Programming Interface

const url = " https://restcountries.com/v3.1/all";
const countries = document.querySelector("#country");
const btn = document.querySelector("#btn");

const getCountries = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
  countries.innerText = data[200].name.common;
};

//or using promise chaining
//not recommended
// function getCountries() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

btn.addEventListener("click", getCountries);
