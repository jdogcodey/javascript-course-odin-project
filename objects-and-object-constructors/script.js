const myLibrary = [];

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
  myLibrary.push(newBook);
}

const bookTable = document.querySelector("tbody");

function updateTable() {
  for (let i = 0; i < myLibrary.length; i++) {
    const tableRow = document.createElement("tr");
    bookTable.appendChild(tableRow);
    const tableBookTitle = document.createElement("td");
    tableBookTitle.textContent = myLibrary[i].title;
    tableRow.appendChild(tableBookTitle);
    const tableAuthor = document.createElement("td");
    tableAuthor.textContent = myLibrary[i].author;
    tableRow.appendChild(tableAuthor);
    const tablePages = document.createElement("td");
    tablePages.textContent = myLibrary[i].pages;
    tableRow.appendChild(tablePages);
    const tableRead = document.createElement("td");
    tableRead.textContent = myLibrary[i].read;
    tableRow.appendChild(tableRead);
    console.log("Run Loop" + i);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R.Tolkein", "297", "not read");
const harryPotter = new Book("Harry Potter", "J.K Rowling", "305", "not read");

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

console.log(theHobbit);
console.log(harryPotter);
console.log(myLibrary);
updateTable();
