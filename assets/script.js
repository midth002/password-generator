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
var passwordLengthString = prompt("Set your password length. The length needs to be 8 or more charaters.");
//var specialCharacters = confirm("Would you like special characters?"); 
//var numericCharacters = confirm("Would you like numeric characters?"); 
//var lowercaseCharacters = confirm("Would you like to include lowercase characters?"); 
//var uppercaseCharacters = confirm("Would you like to include uppcase characters?"); 

	var passwordLengthNumber = parseInt(passwordLengthString);
	console.log(passwordLengthNumber);


	if (passwordLengthNumber >= 8) {
		console.log("Thank you!");
	} else if (passwordLengthNumber < 8) {
		console.log("You need more than 8 characters");
	} else {
		console.log("Please enter a numeric value");
		
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