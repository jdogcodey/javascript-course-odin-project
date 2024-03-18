const mylibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      " " +
      this.pages +
      " pages," +
      "read status: " +
      this.read
    );
  };
}

function addBookToLibrary(newBook) {
  mylibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R.R.Tolkein", "297", "not read");
const harryPotter = new Book("Harry Potter", "J.K Rowling", "305", "not read");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

console.log(theHobbit);
console.log(harryPotter);
console.log(mylibrary);
