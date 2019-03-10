// Startpoint
var i = 0;

var images = [];
var time = 3000;

// Image List
images[0] = "http://lorempixel.com/400/200/animals";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";
images[3] = "http://lorempixel.com/400/200/people";


function loadImage() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("loadImage()", time);
}

window.onload = loadImage;
