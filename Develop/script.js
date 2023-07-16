//Password generator function
function generatePassword() {

  //Variables declared
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ':', ',', '.', '?'];

  //Prompts for password length
  numberofCharacters = prompt("How many characters would you like in your password? You can choose a mininum of 8 characters and maximum of 128 characters.");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
  return " Please choose between 8 to 128 characters.";
  }else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt ("Please enter valid number.")
  }else {
    alert (" Your Password will be " + numberofCharacters + " characters long.");
  }

//If Statements 
ifLowercase = confirm(" Do you want lowercase letters in password?");
if (ifLowercase) {
  var makeLowercase = alert(" Your password will include lowercase letters.");
}else {
  alert(" Your password will NOT include lowecase letters!");
}

ifUppercase = confirm(" Do you want uppercase letters in password?");
if (ifUppercase) {
  alert(" Your password will include uppercase letters.");
}else {
  alert(" Your password will NOT include uppercase letters!")
}

 ifNumbers = confirm(" Do you want numbers in password?");
 if (ifNumbers) {
  alert(" Your Password will include numbers.");
 }else {
  alert(" Your password will NOT include numbers!");
 }
 
 ifSpecial = confirm(" Do you want special characters in password?");
 if (ifSpecial) {
  alert(" Your password will include special characters.");
 }else {
  alert(" Your password will NOT include special characters!");
 }


 //Putting variables into one array
if (ifLowercase) {
  characterAmount = characterAmount.concat(lowercaseLetters);
}
if (ifUppercase) {
  characterAmount = characterAmount.concat(uppercaseLetters);
}
if (ifNumbers) {
  characterAmount = characterAmount.concat(numbers);
}
if (ifSpecial) {
  characterAmount = characterAmount.concat(specialCharacters);
}


//Math for the final password 
let finalPass = ""
for (let i = 0; i < numberofCharacters; i++) {
  let generator = [Math.floor(Math.random()* characterAmount.length)];
 password.push(finalPass);
}
return finalPass;
};
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
