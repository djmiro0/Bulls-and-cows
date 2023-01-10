function bullsAndCows(secretNumber, guess) {
  let bulls = 0;
  let cows = 0;
  let secretNumberArray = secretNumber.toString().split("");
  let guessArray = guess.toString().split("");
  for (let i = 0; i < 4; i++) {
    if (typeof guess !== "number") {
      return `Your guess "${guess}" is not a number. Please guess a number...`;
    } else if (secretNumberArray[i] === guessArray[i]) {
      bulls++;
    } else if (secretNumberArray.includes(guessArray[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

console.log(bullsAndCows(1234, 1234));
// const prompt = require("prompt-sync")({ sigint: true });
// let name = prompt("What is your name? ");
// console.log(`User's input is: ${name}`);
