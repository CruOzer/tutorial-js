// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function() {
  var years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old`;
};

Book.prototype.revise = function(newYear) {
  this.revised = true;
  this.year = newYear;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
  // Inherit book
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Use magazine Constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Mag1', 'John Doe', 2013, 'January');
console.log(mag1.getSummary());
console.log(mag1);
