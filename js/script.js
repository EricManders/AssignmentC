//When you scroll the page
window.onscroll = function() {ChangeColour()};

function ChangeColour() {
    //When the page scrolled trough 50px it will get white and change the logo
  if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
    if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
      document.getElementById("scrolltest").style.backgroundColor = "#161619";
    }
    else {
document.getElementById("scrolltest").style.backgroundColor = "#1c2d34";
    }
    //When the page is scrolled less then 50px it will get transparent and change the logo
  } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    //change the background color and the image
     
     document.getElementById("scrolltest").style.backgroundColor = "#161619";
  
   }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}