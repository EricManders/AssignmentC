var userstring = prompt("Please fill in a sentence");

function WordCount(str) {
	//splitting the string into an array of strings
	var splitString = str.split(" ");
	//have a word counter set to 0
	var words = 0;

	//loops trough every word and when it finds one it will add one to the words variable
	for (var i = 0; i < splitString.length; i++) {
		words++;
	}

	//return the words counter
	return words;
}

	if (userstring == "") 
	{
		document.getElementById("word").innerHTML = "Refresh and please fill in a word";
		console.log("");
	}
	else {
		document.getElementById("word").innerHTML = "Your total number of words are: " + WordCount(userstring);
	}
