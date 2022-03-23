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

// 1. Create a variable to save user input from propmpts

var specialCharacters = true; 
var numericCharacters = true; 
var lowercaseCharacters = true; 
var uppercaseCharacters = true; 

	function generatePassword() { 
		 
			var passwordLengthString = prompt("Set your password length. The length needs to be 8 or more charaters.");
			var passwordLengthNumber = parseInt(passwordLengthString);
			if (passwordLengthNumber >= 8) {
			getUsersCharacters();
			} else if (passwordLengthNumber < 8) {
				passwordLengthString = prompt("That was not more than 8 characters. Please have 8 or more characters.");
				checkPasswordLength();
			} else {
				passwordLengthString = prompt("That was not a numeric value. Please have 8 or more characters.");
				checkPasswordLength();
		}

			
	}


	function getUsersCharacters() {
		specialCharacters = confirm("Would you like special characters?"); 
		console.log(specialCharacters );
		numericCharacters = confirm("Would you like numeric characters?"); 
		console.log(numericCharacters);
		lowercaseCharacters = confirm("Would you like to include lowercase characters?"); 
		console.log(lowercaseCharacters);
		uppercaseCharacters = confirm("Would you like to include uppcase characters?"); 
		console.log(uppercaseCharacters);
	}






	// passwordLength (string) string into integer
	// specialCharacters boolean 
	// numericCharacters boolean 
	// lowercaseCharacters boolean
	// uppercaseCharacters boolean
	// alert, confirm, prompt
	// Use conditionals to validate inputs (password length (must be 8 or more characters, user enters no inputs)
	// 
//2. Create arrays for each type of character
	//specialCharacters array, uppercase array, lowercase array, numeric
//3. use a randomizer function to select characters from each array
//4. generatePassword function -- grab values out of the arrays from the user input to generate a random password
//5. Create empty array that represents the final password
// 6. convert the function into a string and show the password to the user