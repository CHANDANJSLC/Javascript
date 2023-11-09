const randomNumber =Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  const guess = parseInt(prompt("Guess the number (between 1 and 100):"));

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    attempts++;

    if (guess < randomNumber) {
      alert("Enter still higher number! Please Try again.");
    } else if (guess > randomNumber) {
      alert("Enter still lower number!Please Try again.");
    } else {
      alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
      break;
    }
  }
}
