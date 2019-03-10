// get elements
var modelBtn = document.getElementById('modalBtn');
var modal = document.getElementById('simpleModal');
var closeBtns = document.getElementsByClassName('close-btn');

// Event for open modal
modalBtn.addEventListener('click', openModal);
// event for close modalBtn
Array.from(closeBtns).forEach(function(element) {
  element.addEventListener('click', closeModal);
});
window.addEventListener('click', outsideClick);
// open modal
function openModal(e) {
  modal.style.display = 'block';
}

// close modal
function closeModal(e) {
  modal.style.display = 'none';
}


function outsideClick(e) {
  if (e.target == modal)
    closeModal();
}
