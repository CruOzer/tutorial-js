class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    var years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }

  revise(newYear) {
    this.revised = true;
    this.year = newYear;
  }

  static topBookStore(){
    return 'Barnes & Noble';
  }
}

console.log(Book.topBookStore());
// Instanciate book
const book1 = new Book('Book1', 'John Doe', 2013);
console.log(book1.getSummary());
book1.revise(2019);
console.log(book1.getAge());
