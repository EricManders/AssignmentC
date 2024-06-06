var userstring = prompt("please enter a word");

function FirstReverse(str) {

	// Step 1. Use the split() method to return a new array
	var splitString = str.split("");
	//this will split every word that the user has inputted.
	// for instance hello would be h e l l o.

	// Step 2. Use the reverse() method to reverse the new created array
	var reverseArray = splitString.reverse();
	// for instance h e l l o would be o l l e h.

	// Step 3. Use the join() method to join all elements of the array into a string
	var joinArray = reverseArray.join("");
	// we use the "" to paste them together without spaces

	// Step 4. Return the reversed string
	return joinArray;
}

if (userstring == "") 
{
	document.getElementById("reversed").innerHTML = "Please reload the page and fill in a word";
}
else {
	document.getElementById("reversed").innerHTML = "Your reversed word/numbers is " + FirstReverse(userstring) + " which was " + userstring;
}


// A big thankyou to: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ For explaining how to do this.