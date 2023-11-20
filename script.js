// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input
    const userGuess = parseInt(guessInput.value);

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
    } else {
        message.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
        message.style.color = 'red';
    }
}