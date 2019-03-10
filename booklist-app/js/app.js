// Book cass: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((item) => UI.addBookToList(item));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a class="btn btn-danger btn-sm delete" href='#'>X</a></td>`;
    list.appendChild(row);
  }

  static deleteBook(el) {
    el.remove();
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static showAlert(msg, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // vanish in 3 seconds
    setTimeout(() => div.remove(), 3000);
  }
}

// Store Class: Handles storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    })
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
    return;
  }
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Add book to ui
  UI.addBookToList(book);
  // Add book to store
  Store.addBook(book);
  UI.showAlert('Book added', 'success');
  // clear fields
  UI.clearFields();
});

// Event Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    UI.deleteBook(e.target.parentElement.parentElement);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book removed', 'info');
  }
});
