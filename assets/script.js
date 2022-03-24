// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create a variable to save user input from propmpts


var specialInput = true; 
var numericInput = true; 
var lowercaseInput = true; 
var uppercaseInput = true; 
var passwordLengthString;
var passwordLengthNumber = 0;

// Create arrays for each type of character
	//specialCharacters array, uppercase array, lowercase array, numeric

var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var finalArray;



	// Once user clicks on the generate password button, this function starts checking what the user wants in their password.
	function generatePassword() { 
			
		finalArray = [];
			finalPassword = ""; 
			// passwordLength (string) string into integer
			passwordLengthString = prompt("Set your password length. The length needs to be 8 or more charaters.");
			passwordLengthNumber = parseInt(passwordLengthString);
			checkPasswordLength();
			getUsersCharacters();
			randomizer();

			//convert the function into a string and show the password to the user
			return finalPassword;
		}
		
	// Checking if the password is between 8 to 128 from the users input. 
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
				alert("Please set your password length in a numeric value. The length needs to be between 8 to 128 characters.");
				return generatePassword();
			}
	}

	//4. getUsersCharacters -- grab values out of the arrays from the user input to generate a random password
	function getUsersCharacters() {

		// Special Characters type
		specialInput = confirm("Would you like special characters?"); 
		if (specialInput) {
			finalArray = finalArray.concat(specialArray);
		}

		// Numeric Characters type
		numericInput = confirm("Would you like numeric characters?"); 
		if (numericInput) {
			finalArray = finalArray.concat(numericArray);
		} 
		
		// Lowercase Characters type
		lowercaseInput = confirm("Would you like to include lowercase characters?"); 
		if (lowercaseInput) {
			finalArray = finalArray.concat(lowercaseArray);
		}
		
		// Uppercase Characters type 
		uppercaseInput = confirm("Would you like to include uppcase characters?"); 
		if (uppercaseInput) {
			finalArray = finalArray.concat(uppercaseArray);
		}

		// If user didn't select any characters type, send an alert and have the user pick again.
		if (!specialInput && !numericInput && !lowercaseInput && !uppercaseInput)
			{
				 alert("You must select at least one of the characters should be selected for your password.");
				 getUsersCharacters();
			}
	}


	
	//3. use a randomizer function to select characters from each array
	// Using Math.Random to randomize the finalArray. Using a for loop against the number the user wants in the password.
	function randomizer() {
		
		for (i = 0; i < passwordLengthNumber; i++) {
			var specialRandom = finalArray[Math.floor(Math.random() * finalArray.length)];
			console.log(typeof specialRandom);

			password = password.concat(specialRandom);
		}	console.log(password);
	}

	



// 6. convert the function into a string and show the password to the user