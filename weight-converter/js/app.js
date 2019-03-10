var input = document.getElementById('lbsInput');
input.addEventListener('input', convertWeight);
var output = document.getElementById('output');
output.style.visibility = 'hidden';

function convertWeight(e) {
  output.style.visibility = 'visible';
  var lbs = e.target.value;
  // Get elements
  var grams = document.getElementById('gramOutput');
  var kg = document.getElementById('kgOutput');
  var oz = document.getElementById('ozOutput');
  // Math
  grams.innerHTML = lbs / 0.0022046;
  kg.innerHTML = lbs / 2.2046;
  oz.innerHTML = lbs * 16;
}
