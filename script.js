// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create a function called generatePassword
function generatePassword() {
  // Present the user with a series of prompts for password criteria
  // Tell the user what they are able to use for a passowrd
  alert("Your password can contain: \nUpper and Lowercase characters,\nSpecial Characters,\nor Numbers");
  alert("We will now select the criteria you want for your passowrd!")

  // Ask the user which criteria they would like to use for their password - only a few to start off
  // Create functions for each of the prompts and scenarios so that the code can be separated out and eassier to debug
  // special characters
  // numbers
  // upper and lowercase

  // passwordNumbers();
  // passwordSpecialCharacters();
  passwordLength();

  // if (passwordNumbers) {
  //   console.log("Numbers added in password");
  // } else {
  //   console.log("Numbers are not added.")
  // }
  // if (passwordSpecialCharacters) {
  //   console.log("Special Characters added in password");
  // } else {
  //   console.log("Special characters are not added.")
  // }


  // At the end - have a summary of all the prompts they confirmed before showing the password

}

// Function to determine if the user wants numbers
function passwordNumbers() {
  var numbers = confirm("Would you like numbers in your password?");
  return numbers;
  // returning the value is going to be a true or false - so we would not really need anything else
}
// Function to determine if the user wants special characters
function passwordSpecialCharacters() {
  var characters = confirm("Would you like special characters in your password?");
  return characters;
  // returning the value is going to be a true or false - so we would not really need anything else
}
// Function to determine if the user wants special characters
function passwordLength() {

  // Getting input from the user
  var length = prompt("How long would you like your password to be?\nPlease choose a number between 8 and 128.");

  // Common error messages needed
  var numberError = "The number you entered was not between 8 and 128.\nPlease try again";
  var stringError = "You entered text.\nPlease choose a number between 8 and 128.";

  // Converting the user input from string to a number/integer
  var passLength = parseInt(length, 10);

  // Checking to see if a number was entered, or if it falls within the criteria of 8-128
  // If the password is not correct, it has to be reset to 0, and then we call the fucnction back onto itself - Recursion!
  if (isNaN(passLength)) {
    alert(stringError);
    console.log(passLength);
    passLength = 0;
    passwordLength();
  } else if (passLength < 10 || passLength > 128) {
    alert(numberError);
    console.log(passLength);
    passLength = 0;
    passwordLength();
  } else {
    alert(passLength + " is acceptable!");
    console.log(passLength);
  }
}



