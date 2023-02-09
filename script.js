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


// Variable options for password
var abcOptions = "abcdefghijklmnopqrstuvwxyz"
var numberOptions = "1,2,3,4,5,6,7,8,9";
var specialCharacterOptions = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var abcOptionsUpperCase = abcOptions.toUpperCase();

// console.log(specialCharacters);
// console.log(concatOptions.concat(abcOptions,numberOptions,specialCharacterOptions,abcOptionsUpperCase));

// Create a function called generatePassword
function generatePassword() {
  // Start the function each time with an empty string for concatenation and final password
  var finalPassword = "";

  // Present the user with a series of prompts for password criteria
  // Tell the user what they are able to use for a passowrd
  alert("Your password can contain: \nUpper and Lowercase characters,\nSpecial Characters,\nor Numbers");
  alert("We will now select the criteria you want for your passowrd!")

  // console.log("You password length is: \n" + passwordLength());
  passwordLength();
  characters();

  // Showing confirmation of what we have after all of the prompts:

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
  // https://www.webdevelopersnotes.com/the-javascript-prompt-getting-user-input

  if (isNaN(passLength)) {
    alert(stringError);
    passLength = 0;
    passwordLength();
  } else if (passLength < 10 || passLength > 128) {
    alert(numberError);
    passLength = 0;
    passwordLength();
  } else {
    alert(passLength + " is acceptable!");
  }
  return passLength;
}


// Reduce the length of some of these variable names
function characters() {
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var specialCharacters = confirm("Would you like to include special characters?");
  var passwordStringOptionsFull = "";

  // Console log for confirmations:
  console.log("Lower Case :" + lowerCase + "\nUpper Case:" + upperCase + "\nNumberic: " + numeric + "\nSpecial Characters: " + specialCharacters);

  if(!lowerCase && !upperCase && !numeric && !specialCharacters) {
    console.log("Pick something!!!");
    alert("You have to pick something!");
    characters();
  }

  // Can this also be written with a switch statement?

  if(lowerCase) {
    passwordStringOptionsFull = passwordStringOptionsFull.concat(abcOptions);
  } 
  if (upperCase) {
    passwordStringOptionsFull = passwordStringOptionsFull.concat(abcOptionsUpperCase);
  }
   if (numeric) {
    passwordStringOptionsFull = passwordStringOptionsFull.concat(numberOptions);
  } 
  if (specialCharacters) {
    passwordStringOptionsFull = passwordStringOptionsFull.concat(specialCharacterOptions);
  }
  console.log(passwordStringOptionsFull);
  return passwordStringOptionsFull;
}
