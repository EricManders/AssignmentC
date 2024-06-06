// Getting the player
var player = document.getElementById("effect");
var mp3Source = document.getElementById("effect");

//when ever a key is pressed call that function
document.onkeydown = checkKeycode


//Create a function
function checkKeycode(e) {
  //create function keycode
var keycode;
  // checks if you are using the window
  if (window.event)
   {
    //Gets the keycodes which are pre defined
    keycode = window.event.keyCode;
   }
   // For loop for each keycode 0 being 48 untill 57 being 9
   for(var i = 48; i <= 57; i++)
   {
    //If the keycode is i
    if (keycode == i) {
      //Change the music source and background
      mp3Source.src = 'music/keyboard'+i+'.mp3';
      document.getElementById("key"+i).style.backgroundColor = "red";
      //Load and play the audio player and set the volume
      player.load();
      player.play();
      player.volume = 0.3;
    }
    //else put the background colour back to transparent
    else {
      document.getElementById("key"+i).style.backgroundColor = "transparent";
    }
   }
}

// A big thankyou to: http://gcctech.org/csc/javascript/keycodeExample.html for understanding keydown functions