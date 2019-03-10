var numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', getNumberFact);
var numberFact = document.getElementById('factText');
var yearInput = document.getElementById('yearInput');
yearInput.addEventListener('input', getYearFact);
var yearFact = document.getElementById('factTextYear');

function getNumberFact(e) {
  var number = e.target.value;
  if (number == '') {
    document.getElementById('fact').style.display = 'none';
    return;
  }
  document.getElementById('fact').style.display = 'block';
  fetch('http://numbersapi.com/' + number)
    .then((res) => res.text())
    .then((data) => numberFact.innerHTML = data)
    .catch((error) => console.log(error));
}


function getYearFact(e) {

  var number = e.target.value;
  if (number == '') {
    document.getElementById('fact-year').style.display = 'none';
    return;
  }
  document.getElementById('fact-year').style.display = 'block';
  fetch('http://numbersapi.com/' + number + '/year')
    .then((res) => res.text())
    .then((data) => yearFact.innerHTML = data)
    .catch((error) => console.log(error));
}
