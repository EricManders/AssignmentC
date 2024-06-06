var userstring = prompt("Please fill in your number");

function FirstFactorial(num) {
	//Checks if the number is 
	if (num > 18) 
	{
		return 'the range is only between 1 & 18';
	}
	else {
		//checks if num is a number
		if (isNaN(num)) 
		{
			return 'Not a Number!'
		}
		else
		{
			//if the number is less then 0, reject it.
			if (num < 0) 
			{
				return 'the range is only between 1 & 18';
			}
			//If the number is 0, then its factorial is 1;
			//We need this to be 1 because otherwise the function will calculate it times 0.
			else if (num == 0) {
				return 1;
			}
			//Run the code if its a number between 1 and 18
			else {
				return(num * FirstFactorial(num - 1));
				/*
				These are several calls at once,
				if the "num" is higher then it calls more times, this goes like this.
				FirstFactorial(5) will return 5 * FirstFactorial(5-1),
				this then goes on to FirstFactorial(4). It will keep doing this untill 1.
				*/
			}
		}
	}
	
}

document.getElementById("number").innerHTML = "Your number is: " + FirstFactorial(userstring);
console.log(FirstFactorial(userstring));

//A big thankyou to: https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/ For helping me explain how this works