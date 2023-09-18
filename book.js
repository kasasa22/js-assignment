const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('book-title');
const year1 = document.getElementById('year');
const author1 = document.getElementById('author');

bookForm.addEventListener('submit', addbook);

function addbook(e) {
    e.preventDefault();

    // Get input values
    const title = bookTitle.value;
    const author = author1.value;
    const year = year1.value;


    // Create a new book object
    const book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `<h3>${title}</h3><p>${author}</p><button class="delete">Delete</button>`;

    // Add the book to the list
    bookList.appendChild(book);

    // Clear the input fields
    titleInput.value = "";
    authorInput.value = "";

    // Event listener for deleting books
    const deleteButton = book.querySelector(".delete");
    deleteButton.addEventListener("click", deleteBook);
}

// Function to delete a book
function deleteBook() {
    const book = this.parentElement;
    bookList.removeChild(book);
}