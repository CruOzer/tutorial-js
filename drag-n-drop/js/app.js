var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart(e) {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(e) {
  this.className = 'fill';
}


Array.from(empties).forEach((element) => {
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave(e) {
  this.className = 'empty';
}

function dragDrop(e) {
  this.className = 'empty';
  this.append(fill);
}
