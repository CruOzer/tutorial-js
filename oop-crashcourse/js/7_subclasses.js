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

  static topBookStore() {
    return 'Barnes & Noble';
  }
}

// Magazine sub class
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine('Mag1', 'John Doe', 2013, 'January');
console.log(mag1.getSummary());
console.log(mag1);
