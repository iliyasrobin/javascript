let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
mode.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").style.color = "white";
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    // document.querySelector("body").style.color = "black";
    // document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
