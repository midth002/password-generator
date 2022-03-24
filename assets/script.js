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
var passwordLengthString;
var passwordLengthNumber = 0;

var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var finalArray = [];
var finalPassword = "";



	function generatePassword() { 
			passwordLengthString = prompt("Set your password length. The length needs to be 8 or more charaters.");
			passwordLengthNumber = parseInt(passwordLengthString);
			checkPasswordLength();
			getUsersCharacters();
			randomizer();
			
		}
		
	function checkPasswordLength() {
		if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
			return console.log(passwordLengthNumber);
			
			} else if (passwordLengthNumber < 8) {
				alert("That was not more than 8 characters. Please have 8 or more characters.");
				return generatePassword();
		
			} else if (passwordLengthNumber > 128) {
				alert("That was more than 128 characters. Please have 8 to 128 characters.");
				return generatePassword();
			}
		
			else {
				alert("Please set your password length. The length needs to be 8 or more charaters.");
				return generatePassword();
			}
	}

	function getUsersCharacters() {
		specialInput = confirm("Would you like special characters?"); 
		if (specialInput) {
			// finalArray.unshift(specialArray);
			finalArray = finalArray.concat(specialArray);
		}
		numericInput = confirm("Would you like numeric characters?"); 
		if (numericInput) {
			finalArray = finalArray.concat(numericArray);
		} 
		
		lowercaseInput = confirm("Would you like to include lowercase characters?"); 
		if (lowercaseInput) {
			finalArray = finalArray.concat(lowercaseArray);
		}
			
		uppercaseInput = confirm("Would you like to include uppcase characters?"); 
		if (uppercaseInput) {
			finalArray = finalArray.concat(uppercaseArray);
		}

		console.log(finalArray);


	}


		

	function randomizer() {
		
		for (i = 0; i < passwordLengthNumber; i++) {
			var specialRandom = finalArray[Math.floor(Math.random() * finalArray.length)];
			console.log(specialRandom);
			
			
		}	console.log(passwordLengthNumber);
			
		
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