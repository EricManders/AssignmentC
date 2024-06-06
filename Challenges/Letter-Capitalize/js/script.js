var userstring = prompt("Please fill in a sentence");

function letterCapitalize(str) {
	//This action splits the string and detects if there is a space in between(" ")
	var splitString = str.split(" ");

	//Loops trough the sentence and checks the length of it
	for (var i = 0 ; i < splitString.length; i++) {
		//The array becomes the splitted arrays and checks at the first letter to make it capital.
		//Since this only gets the first letter everytime, we need the .slice function to let the other letters join 
		splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
	}

	//joins the array back together to get a full word and seperates them with a space in between
	const str2 = splitString.join(" ");
	return str2;
}
console.log(letterCapitalize(userstring));

document.getElementById("Text").innerHTML = letterCapitalize(userstring);

// A big thankyou to: https://flexiple.com/javascript-capitalize-first-letter/#:~:text=To%20capitalize%20the%20first%20character,()%20function%20to%20capitalize%20it. For helping me understand this better.