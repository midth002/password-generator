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


var specialInput = true; 
var numericInput = true; 
var lowercaseInput = true; 
var uppercaseInput = true; 


	function generatePassword() { 
			var passwordLengthString = prompt("Set your password length. The length needs to be 8 or more charaters.");
			var passwordLengthNumber = parseInt(passwordLengthString);
			
			if (passwordLengthNumber >= 8) {
				getUsersCharacters();
				} else if (passwordLengthNumber < 8) {
					passwordLengthString = prompt("That was not more than 8 characters. Please have 8 or more characters.");
					
			} else {
				passwordLengthString = prompt("Please set your password length. The length needs to be 8 or more charaters.");
					
			}
		}
		
	
	function getUsersCharacters() {
		specialInput = confirm("Would you like special characters?"); 
			console.log(specialInput);
		numericInput = confirm("Would you like numeric characters?"); 
		console.log(numericInput);
		lowercaseInput = confirm("Would you like to include lowercase characters?"); 
		console.log(lowercaseInput);
		uppercaseInput = confirm("Would you like to include uppcase characters?"); 
		console.log(uppercaseInput);
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