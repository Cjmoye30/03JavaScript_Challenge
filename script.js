// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable options for password
var abcOptions = "abcdefghijklmnopqrstuvwxyz"
var numberOptions = "1,2,3,4,5,6,7,8,9";
var specialCharacterOptions = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var abcOptionsUpperCase = abcOptions.toUpperCase();

// Create a function called generatePassword
function generatePassword() {

  // Reset the password at the start each time the function runs
  var finalPassword = "";

  // Greeting the user for the criteria that will be asked
  alert("Your password can contain: \nUpper and Lowercase characters,\nSpecial Characters,\nor Numbers");

  // Getting the return values needed from password and character functions
  var length = passwordLength();
  var charSelection = characters();

  // Random Password Generation using a forloop on character selection
  for (var i = 0; i < length; i++) {
    var randSelection = Math.floor(Math.random() * charSelection.length);
    finalPassword += charSelection[randSelection];
  }
  return finalPassword;

}

// Function to determine if the user wants special characters
function passwordLength() {

  // Desired length of password
  var length = prompt("How long would you like your password to be?\nPlease choose a number between 8 and 128.");

  // Error messages 
  var numberError = "The number you entered was not between 8 and 128.\nPlease try again";
  var stringError = "You entered text.\nPlease choose a number between 8 and 128.";

  // Converting the user input from string to a number/integer
  var passLength = parseInt(length, 10);

  // Validation or re-run the function to get correct input
  if (isNaN(passLength)) {
    alert(stringError);
    passLength = 0;
    passwordLength();
  } else if (passLength < 8 || passLength > 128) {
    alert(numberError);
    passLength = 0;
    passwordLength();
  } else {
    alert(passLength + " is acceptable!");
  }

  // Return the final length of the password desired
  return passLength;
}

// Reduce the length of some of these variable names
function characters() {
  // Asking the user for confirmation on all of the criteria:
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var specialCharacters = confirm("Would you like to include special characters?");

  // Empty string to populate
  var passwordStringOptionsFull = "";

  // Re-run the function if nothing is selected
  if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    alert("You have to pick something!");
    characters();
  }

  // If criteria returns true, then the string options are concatenated to the empty string
  if (lowerCase) {
    passwordStringOptionsFull += abcOptions;
  }
  if (upperCase) {
    passwordStringOptionsFull += abcOptionsUpperCase;
  }
  if (numeric) {
    passwordStringOptionsFull += numberOptions;
  }
  if (specialCharacters) {
    passwordStringOptionsFull += specialCharacterOptions;
  }

  // Return all possible options selected
  return passwordStringOptionsFull;
}


