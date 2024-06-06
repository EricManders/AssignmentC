// Getting the canvas from html
var canvas = document.getElementById("myCanvas");
// with 2d you can draw any shape you like
var ctx = canvas.getContext("2d");
// Variable for the radius 
var lastend = 0;
// Values for the colours
var data = [40,70,30,60]; // 200 in total
// Variable for the colour data
var myTotal = 0;
// Variable for the colours
var myColor = ['#fedcac','#feacce','#acfedc','#accefe'];

// For every time that e is lower the the data length, increment the MyTotal variable by the data till it reached the data values.
for(var e = 0; e < data.length; e++)
{
  myTotal += data[e];
}

// For every time i is lower then the the data length..
for (var i = 0; i < data.length; i++) {
// Fill in the colour
ctx.fillStyle = myColor[i];
// begin drawing function 
ctx.beginPath();
// draw the lines tomake a pie shape
ctx.moveTo(canvas.width/2,canvas.height/2);
// Since the outer circle needs to be a circle itself we use math.pi to draw the circle
// Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,lastend,lastend+(Math.PI*2*(data[i]/myTotal)),false);
// complete the pie shape
ctx.lineTo(canvas.width/2,canvas.height/2);
// Fill in the canvas
ctx.fill();
// add the circle data to lastend (Radius)
lastend += Math.PI*2*(data[i]/myTotal);
}
// Styling of the canvas and text placement
ctx.font = "20px Montserrat sans-serif";
ctx.fillStyle = "black";
ctx.fillText("UCD", 30, 65);
ctx.fillText("FOD", 35, 145);
ctx.fillText("MP", 135, 145);
ctx.fillText("PRJ", 125, 60);


// This website helped me understand the canvas https://www.html5canvastutorials.com/
// This website helped me understand the arc https://www.html5canvastutorials.com/tutorials/html5-canvas-arcs/
// This code is inspired by https://stackoverflow.com/questions/6995797/html5-canvas-pie-chart