// Define DOM elements
const submit = document.querySelector("button[type='submit']"); // Submit button
const plusButton = document.querySelector(".add-book button"); // Button to show form
const removeFormButton = document.querySelector(".remove-sidebar button"); // Button to hide form
let crudAction; // To track state of action

// Main (cards and form)
const mainClassList = document.querySelector("main").classList;
const datasetList = [];
const article = document.querySelector("article");

// Array for card display items
const cardDisplayArray = ["title", "author", "pages"];
// Image URLs
const imgArray = ["3idiots", "inception", "interstellar2", "udaan", "whiplash"];

// Generate random image URL
function generateRandomimgUrl() {
    return `images/movies/${imgArray[rand(imgArray.length)]}.jpg`;
}

// Random number generator
function rand(num) {
    return Math.floor(Math.random() * num);
}

// Add event listeners to form buttons
plusButton.addEventListener("click", () => {
    mainClassList.add("plus");
    mainClassList.remove("minus");
});

removeFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    mainClassList.remove("plus");
    mainClassList.add("minus");
});

// Detect card by data-set attribute
function detectCard(node) {
    let index = false;
    publicLibrary.libraryBooks.forEach((book) => {
        if (book.id === node.getAttribute("data-set")) {
            index = publicLibrary.libraryBooks.indexOf(book);
        }
    });
    return index;
}

// Form submission
submit.addEventListener("click", actionFormSubmission);

function actionFormSubmission(e) {
    e.preventDefault(); // Prevent browser default form submission

    // Store input values
    let title = document.querySelector("input#title").value;
    let author = document.querySelector("input#author").value;
    let pages = document.querySelector("input#pages").value;
    let read = document.querySelector("input#read").value;

    let book = Book.makebook(title, author, pages, read);

    if (checkFormFilled(book)) {
        publicLibrary.addBookToLibrary(book);
    }
}

// Validate form inputs
function checkFormFilled(book) {
    let flag = 1;
    const required = document.querySelectorAll("input[required]");

    Array.from(required).forEach((node) => {
        if (!book[node.getAttribute("id")]) {
            node.classList.add("invalid");
            flag = 0;
        } else {
            if (Array.from(node.classList).includes("invalid")) {
                node.classList.remove("invalid");
            }
        }
    });

    return !!flag;
}

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
   static makebook(title, author, pages, read) {
    return new Book(title, author, pages, read);
}
toggleRead(){
   this.read= this.read?false:true;
   return this.read;
}

}
class Library{
    constructor()
    {
        this.books=[];
    }
    get libraryBooks(){
        return this.books
    }
    addBookToLibrary(book){
        book.id = crypto.randomUUID();
        this.books.push(book);
        render(book, "create");
    }
    deleteBook(index){
         this.books.splice(index, 1);
    }
}
const publicLibrary=new Library();
// Initial books
    publicLibrary.addBookToLibrary(Book.makebook("The Man Who Knew Infinity", "Danish Nayyar", 4234, true));
    publicLibrary.addBookToLibrary(Book.makebook("Subtle Art of not giving a f***", "S.Ramanujan", 234, true));
    publicLibrary.addBookToLibrary(Book.makebook("The Man Who Knew Infinity", "Danish Nayyar", 4234, true));

// Delete card
function deleteCard(e) {
    publicLibrary.deleteBook(detectCard(e.target.parentNode));
    render(e.target.parentNode, "delete");
}

// Toggle read/unread
function bookRead(e) {
    let bookRead = publicLibrary.libraryBooks[detectCard(e.target.parentNode)];
    let readButton = e.target;
    let value=bookRead.toggleRead();
    render([readButton, value], "update");
}

// Handle read/delete button clicks on card
article.addEventListener("click", (e) => {
    if (!publicLibrary.libraryBooks[0]) return;

    if (e.target.classList.contains("read-button")) {
        bookRead(e);
    }

    if (e.target.classList.contains("delete-button")) {
        deleteCard(e);
    }
});

// Create a book card in DOM
function createBookCard(book) {
    const newBookCard = document.createElement("div");
    newBookCard.className = "card";
    newBookCard.setAttribute("data-set", book.id);
    datasetList.push(book.id);

    const cardImg = document.createElement("img");
    cardImg.className = "card-image";
    cardImg.setAttribute("src", generateRandomimgUrl());

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "---";

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "Read";

    Object.keys(book).forEach((key) => {
        if (!cardDisplayArray.includes(key)) return;

        const cardNode = document.createElement("p");
        cardNode.textContent = book[key];
        cardNode.classList.add(`card-${key}`);
        cardNode.classList.add("card-font");
        newBookCard.appendChild(cardNode);
    });

    newBookCard.appendChild(readButton);
    newBookCard.appendChild(deleteButton);
    newBookCard.appendChild(cardImg);

    article.firstElementChild.insertBefore(newBookCard, article.firstElementChild.children[0]);
    mainClassList.remove("plus");
    mainClassList.add("minus");
}

// Render changes to DOM
function render(book, action) {
    if (action === "delete") {
        book.remove();
    } else if (action === "create") {
        createBookCard(book);
    } else if (action === "update") {
        const [readButton, toggleRead] = book;
        if (!toggleRead) {
            readButton.classList.add("state-unread");
            readButton.textContent = "UnRead";
        } else {
            readButton.classList.remove("state-unread");
            readButton.textContent = "Read";
        }
    }
}
