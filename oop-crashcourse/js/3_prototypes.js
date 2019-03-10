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


const book1 = new Book('Book1', 'John Doe', 2013);
const book2 = new Book('Book2', 'Jane Doe', 2016);

console.log(book1.getSummary());
console.log(book2.getAge());
book2.revise(2019);
console.log(book2.getAge());
console.log(book2);
