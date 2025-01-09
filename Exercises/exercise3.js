//Print all even numbers from 0 to 100

/*
for (let num = 0; num <= 100; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

// or

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

*/

//Game: user has to guess any number

let gameNumber = 25;

let userNum = prompt("Guess the number: ");

while (userNum != gameNumber) {
  userNum = prompt("you entered the wrong number, try again");
}

console.log("You guessed the number correctly");
