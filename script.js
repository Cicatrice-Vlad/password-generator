// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function used to prompt user for password options
function getPasswordOptions() {
  var finalCharArray = [];
  // variables declared for all the declarations needed to create random password.
  var isLowercase = confirm("do you want lowercase characters?");
  var isUppercase = confirm("do you want isUppercase?");
  var isNumber = confirm("do you want isNumber?");
  var isSpecialChar = confirm("do you want isSpecialChar?");
  // if statements created to help with the logic of the password by obtaining info from the user.
  if (isLowercase) {
    finalCharArray.push(...lowerCasedCharacters);
  }
  if (isUppercase) {
    finalCharArray.push(...upperCasedCharacters);
  }
  if (isNumber) {
    finalCharArray.push(...numericCharacters);
  }
  if (isSpecialChar) {
    finalCharArray.push(...specialCharacters);
  }

  return finalCharArray;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var finalArray = getPasswordOptions();
  // if statements used to determine the length and calculate the possibilities.

  if (finalArray.length === 0) {
    return alert("Please choose at least one type of characters");
  }

  var passwordLength = prompt(
    "How many characters do you want to use for your password? Choose between 10 and 65."
  );
  // used a radix number (10 in this case) to create logic for the parseInt function.
  passwordLength = parseInt(passwordLength, 10);

  if (passwordLength < 10 || passwordLength > 65 || !passwordLength) {
    return alert("Please choose a number between 10 and 65");
  }

  // for loop
}

// Function to generate password with user input
function generatePassword() {
  getRandom();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
