// Get HTML elements
const addANewBookBtn = document.getElementById("addANewBookBtn");
const buttonContainer = document.getElementById("buttonContainer");
const formContainer = document.getElementById("formContainer");
const addFormBtn = document.getElementById("addFormBtn");
const booksContainer = document.getElementById("booksContainer");
const bookForm = document.getElementById("bookForm");

// Array to store books
const booksArray = [];

// Function to show form when "Add a New Book" button is clicked
addANewBookBtn.addEventListener("click", showForm);

function showForm() {
    buttonContainer.style.display = "none";
    formContainer.style.display = "block";
}

// Function to create and display book card
function createBookCard(book) {
    const ul = document.createElement("ul");
    booksContainer.appendChild(ul);
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = book.name;
}

// Loop through array of books and display them
for (let i = 0; i < booksArray.length; i++) {
    createBookCard(booksArray[i]);
}

// Function to handle form submission and create new book object
function handleFormSubmit(event) {
    event.preventDefault();

    const bookName = document.getElementById("bookName").value;

    const newBookObj = {
        name: bookName,
    }

    // Add new book object to array and display new book card
    booksArray.push(newBookObj);
    createBookCard(newBookObj);

    // Reset form and hide it
    bookForm.reset();
    buttonContainer.style.display = "block";
    formContainer.style.display = "none";
}

// Event listener for form submission
bookForm.addEventListener("submit", handleFormSubmit);