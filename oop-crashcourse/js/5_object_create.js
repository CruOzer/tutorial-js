// Object of Protos

const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function() {
    var years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  },

  revise: function(newYear) {
    this.revised = true;
    this.year = newYear;
  }
}
// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book1';
book1.author = 'John Doe';
book1.year = 2013;

const book2 = Object.create(bookProtos, {

  title: {
    value: 'Book2'
  },
  author: {
    value: 'Jane Doe'
  },
  year: {
    value: 2013
  }
});

console.log(book2.getSummary());
console.log(book1.getSummary());
