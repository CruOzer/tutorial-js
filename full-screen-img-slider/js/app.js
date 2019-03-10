var sliderImages = document.querySelectorAll('.slide');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');

var current = 0;

// Display no slides
function reset() {
  Array.from(sliderImages).forEach((item) => {
    item.style.display = 'none';
  });
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}


//Show previous
function slideLeft() {
  reset();
  if (current <= 0) {
    current = sliderImages.length;
  }
  sliderImages[current - 1].style.display = 'block';
  current--;
}


//Show next
function slideRight() {
  reset();
  if (current >= sliderImages.length - 1) {
    current = -1;
  }
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowRight.addEventListener('click', slideRight);
arrowLeft.addEventListener('click', slideLeft);

startSlide();
