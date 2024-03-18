const mylibrary = [];

function book(title, author, pages, read) {
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

function addBookToLibrary(title, author, pages, read) {
  this.bookInfo = new book(title, author, pages, read);
}

const theHobbit = new addBookToLibrary(
  "The Hobbit",
  "J.R.R.Tolkein",
  "297",
  "not read"
);

console.log(theHobbit.info());
