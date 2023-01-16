function bullsAndCows(secretNumber, guess) {
  let bulls = 0;
  let cows = 0;
  let secretNumberArray = secretNumber.toString().split(""); //turn the number to string and into an array ['']
  let guessArray = guess.toString().split(""); //same, so we can compare them
  if (guessArray.length < 4) {
    // check if the number has 4 digits
    return `Please add ${4 - guessArray.length} number(s) to your guess`;
  } else {
    for (
      let i = 0;
      i < 4;
      i++ //loop whoop
    ) {
      if (typeof guess !== "number") {
        // check if the value is a number
        return `Your guess "${guess}" is not a number. Please guess a number...`;
      } else if (secretNumberArray[i] === guessArray[i]) {
        //check if the number is on the same place as the secret number
        bulls++; //add one to bulls
      } else if (secretNumberArray.includes(guessArray[i])) {
        //check if we have the guess number anywhere inside
        cows++; // add one to cows
      }
    }
  }
  return { bulls, cows };
}
