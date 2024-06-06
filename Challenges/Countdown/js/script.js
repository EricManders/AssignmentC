//Setting up to the countdown date
var countdownDate = new Date("May 31, 2022 00:00:00").getTime();

// Setting the interval function to update the time every second
var x = setInterval(function() {
	// getting the date and time
	var now = new Date().getTime();
	// calculate the distance
	var distance = countdownDate - now;

	// make variables for days, hours, minutes and seconds (this was obtained by W3 Schools)
	var days = Math.floor(distance / (1000 * 60 *60 *24));
	var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// get the countdown timer
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

	//if the distance is less then 0 then clear the timer and say the message below
	if (distance < 0) 
	{
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Happy one year <3"
	}
	// Seconds animation
	if (seconds == 31) 
	{
		document.getElementById("second").style.visibility = "visible";
	} else 
	{
		document.getElementById("second").style.visibility = "hidden";
	}
	// Minutes animation
	if (minutes == 5) 
	{
		document.getElementById("minute").style.visibility = "visible";
	}
	else {
		document.getElementById("minute").style.visibility = "hidden";
	}
	// Hours animation
	if (hours == 21) 
	{
		document.getElementById("hour").style.visibility = "visible";
	}
	else {
		document.getElementById("hour").style.visibility = "hidden";
	}

// 1000 being 1 second
}, 1000);