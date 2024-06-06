var panel1 = document.getElementById("panel1");
panel1.innerHTML = "Accordions (from 19th-century German Akkordeon, from Akkord—(musical chord, concord of sounds) are a family of box-shaped musical instruments of the bellows-driven free-reed aerophone type, colloquially referred to as a squeezebox. A person who plays the accordion is called an accordionist.";
var panel2 = document.getElementById("panel2");
panel2.innerHTML = "I have quite the album collection above 50 different onces!"
var panel3 = document.getElementById("panel3");
panel3.innerHTML = "Anger is the ultimate destroyer of your own peace of mind."

// Getting the accordions
var acc = document.getElementsByClassName("accordion");
var i;

//For everytime that i is lower then accordion length, +1 it.
for (i = 0; i < acc.length; i++) {
	// Because there are 3 accordions we want to add 3 times the function click in here
  acc[i].addEventListener("click", function() {
  	// When hovering adding the class active to change it color
    this.classList.toggle("active");
    // This is for the panel, the "nextElementSibling function" is to get the second thing after the class accordion
    var panel = this.nextElementSibling;
    // If there is maxheight then set it to nothing else
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
    	//put the panel their maxheight with px so that it shows 
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// A big thankyou to W3 Schools for explaining this