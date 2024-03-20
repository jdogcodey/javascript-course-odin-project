const myLibrary = [];
let libraryNumber = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  if (read === true) {
    this.readWord = "Read";
  } else {
    this.readWord = "Not Read";
  }
  this.flipper = function () {
    if (this.read === true) {
      this.read = false;
      this.readWord = "Not Read";
    } else {
      this.read = true;
      this.readWord = "Read";
    }
  };
  this.libraryNumber = libraryNumber;
  this.delete = function () {
    myLibrary.splice(this.libraryNumber, 1);
    const thisBookRow = document.getElementById(this.libraryNumber);
    thisBookRow.remove();
    i--;
    libraryNumber--;
  };
  libraryNumber++;
}

const newBookButton = document.querySelector("button");
const form = document.querySelector("form");

newBookButton.addEventListener("click", function () {
  newBookButton.style.display = "none";
  form.style.display = "block";
});

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const bookTable = document.querySelector("tbody");

function addTableRow() {
  const tableRow = document.createElement("tr");
  tableRow.setAttribute("id", i);
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
  const readCheck = document.createElement("td");
  tableRow.appendChild(readCheck);
  const readButton = document.createElement("input");
  readButton.type = "checkbox";
  const imTalkingThisBook = myLibrary[i];
  const readText = document.createElement("td");
  readText.textContent = myLibrary[i].readWord;
  readButton.addEventListener("click", () => {
    imTalkingThisBook.flipper();
    readText.textContent = imTalkingThisBook.readWord;
  });
  if (myLibrary[i].read === true) {
    readButton.checked = true;
  } else {
    readButton.checked = false;
  }
  readCheck.appendChild(readButton);
  const deleteCell = document.createElement("td");
  tableRow.appendChild(deleteCell);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Book";
  deleteButton.addEventListener("click", function () {
    imTalkingThisBook.delete();
  });
  tableRow.appendChild(readText);
  deleteCell.appendChild(deleteButton);
  console.log("Run Loop" + i);
  newBookButton.style.display = "block";
  form.style.display = "none";
}

let i = 0;
function createTable() {
  for (i = 0; i < myLibrary.length; i++) {
    addTableRow();
  }
}

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function () {
  event.preventDefault();
  const inputName = document.getElementById("name");
  const nameValue = inputName.value;
  const inputAuthor = document.getElementById("author");
  const authorValue = inputAuthor.value;
  const inputPages = document.getElementById("pages");
  const pagesValue = inputPages.value;
  const inputRead = document.getElementById("read");
  const readValue = inputRead.checked;
  const newBook = new Book(nameValue, authorValue, pagesValue, readValue);
  addBookToLibrary(newBook);
  addTableRow();
  i++;
});

myLibrary;

const theHobbit = new Book("The Hobbit", "J.R.R.Tolkein", "297", false);
const harryPotter = new Book("Harry Potter", "J.K Rowling", "305", false);

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

createTable();
