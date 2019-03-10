// Get Input-element
var filterInput = document.getElementById('filterInput');
// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(e) {
  var filterValue = e.target.value.toUpperCase();
  // get ul
  var ul = document.getElementById('names');
  // get relevant lis from ul
  var li = ul.querySelectorAll('li.collection-item');
  // Loop throught collection items
  li.forEach(function(item) {
    // get the link tag
    var a = item.getElementsByTagName('a')[0];
    // check if it matches
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      // match exists
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}
