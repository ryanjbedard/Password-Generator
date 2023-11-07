// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = [
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
var uppercaseArray = [
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
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacterArray = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "<",
  ">",
  ",",
  ".",
  "{",
  "}",
  "[",
  "]",
];

// Write password to the #password input
function passwordOptions() {
  var passwordLength = parseInt(
    prompt("How many characters would you like to have?")
  );
  var characterType = confirm("Would you like special characters?");
  var upperCase = confirm("Would you like to use upper case letters?");
  var lowerCase = confirm("Would you like to use lower case letters?");
  var numPrompt = confirm("Would you like to use numbers?");
  var optionsObj = {
    length: passwordLength,
    charType: characterType,
    upper: upperCase,
    lower: lowerCase,
    numbers: numPrompt,
  };
  return optionsObj;
}

function randomGen(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}

function generatePassword() {
  var options = passwordOptions();
  console.log(options);
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (options.charType) {
    possibleChar = possibleChar.concat(specialcharacterArray);
    guaranteedChar.push(randomGen(specialcharacterArray));
  }
  if (options.upper) {
    possibleChar = possibleChar.concat(uppercaseArray);
    guaranteedChar.push(randomGen(uppercaseArray));
  }
  if (options.lower) {
    possibleChar = possibleChar.concat(lowerCaseArray);
    guaranteedChar.push(randomGen(lowerCaseArray));
  }
  if (options.numbers) {
    possibleChar = possibleChar.concat(numbersArray);
    guaranteedChar.push(randomGen(numbersArray));
  }

  for (var i = 0; i < options.length; i++) {
    var char = randomGen(possibleChar);
    result.push(char);
  }

  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar;
  }
  return result.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
