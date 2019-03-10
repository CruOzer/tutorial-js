var current = document.getElementById('current');
var imgs = document.querySelectorAll('.imgs img');
var opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach((item) => item.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset opacity
  imgs.forEach((item) => item.style.opacity = 1);
  // Change current img to source of clicked img
  current.src = e.target.src;
  //add fade in
  current.classList.add('fade-in');
  setTimeout(() =>
    current.classList.remove('fade-in'), 500)
  //change the opacity
  e.target.style.opacity = opacity;
}
