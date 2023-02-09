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
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var abcOptionsUpperCase = abcOptions.toUpperCase();
var concatOptions = "";
var finalPassword

console.log(specialCharacters);
console.log(concatOptions.concat(abcOptions,numberOptions,specialCharacters,abcOptionsUpperCase));

// Create a function called generatePassword
function generatePassword() {

  // Present the user with a series of prompts for password criteria
  // Tell the user what they are able to use for a passowrd
  alert("Your password can contain: \nUpper and Lowercase characters,\nSpecial Characters,\nor Numbers");
  alert("We will now select the criteria you want for your passowrd!")

  characters();
  console.log("You password length is: \n" + passwordLength());

  // Showing confirmation of what we have after all of the prompts:
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

  // Could we have  a list of base values and concat them all, and then use math.random to select any of the characters?

}


// Function to determine if the user wants special characters
function passwordLength() {

  // Create empty array

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


function characters() {
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var specialCharacters = confirm("Would you like to include special characters?");

  // Console log for confirmations:
  console.log("Lower Case :" + lowerCase + "\nUpper Case:" + upperCase + "\nNumberic: " + numeric + "\nSpecial Characters: " + specialCharacters)
}


// Create a string which has all of the variables needed
// A string for all numbers
// A string for all special characters
// A string for upper and lower case

// parse all the string together to get one long string based on what the user selected

// Remember that we are going to ultimately return a string to the user and not an array
// So the password length does not need to be an array, rather


// Need to loop through the final parsed string and use math.random to select random variables from the string
// Create an empty string called finalPassword which the values can be parsed into