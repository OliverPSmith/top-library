// library array, with examples
const myLibrary = [
    {
        title: 'Lord of the rings',
        author: 'JRR Tolkien',
        pages: 500,
        read: false,
    },
    {
        title: 'Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        pages: 220,
        read: true,
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        pages: 350,
        read: false,
    },
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        pages: 250,
        read: true,
    }
];

// Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function passing book objects and their data through to library
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary();
    console.log(myLibrary);
}
// addBookToLibrary();


function displayLibrary() {
    const library = document.querySelector('.library');
    library.textContent = '';
    
    for (let i  = 0; i < myLibrary.length; i++) {
       
        // Create book, add give it a class, append to library
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        library.appendChild(bookItem);

        // Create book title, append to book
        const bookTitle = document.createElement('h1');
        bookTitle.textContent = myLibrary[i].title;
        bookItem.appendChild(bookTitle);

        // Create book author, append to book
        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = myLibrary[i].author;
        bookItem.appendChild(bookAuthor);

        // Create book total page numbers, append to book
        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages + ' pages';
        bookItem.appendChild(bookPages);

        // Create 'read / unread' + check button, create the logic with checkreadstatus function, append to book.
        const read = document.createElement("div");
        const check=document.createElement("button");
        check.textContent="check";
        
        if (myLibrary[i].read) {
            read.textContent = 'READ';
            read.classList.remove('book-not-read');
            read.classList.add('book-read');
        }   else {
            read.textContent = 'NOT READ';
            read.classList.remove('book-read');
            read.classList.add('book-not-read');
        }
        check.addEventListener('click', () => {
            checkReadStatus(myLibrary[i].title)
        });

        bookItem.appendChild(read);
        bookItem.appendChild(check);

        // Create delete button, create logic, append to book
        const deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        
        deletebtn.setAttribute('delete-item-index', i);
        deletebtn.addEventListener('click', () => {
            myLibrary.splice(deletebtn.getAttribute('delete-item-index'), 1);
            displayLibrary();
            console.log(myLibrary);
        });

        bookItem.appendChild(deletebtn);

    }

}
displayLibrary();
console.log(myLibrary);


function checkReadStatus(title){
    myLibrary.forEach(element=>{
        if(element.title == title){
            if(element.read == true){
                element.read = false;
            }
            else{
                element.read = true;
            }
        }
    });
    displayLibrary();
    console.log(myLibrary);
}


// send form function
function addBook(e) {
    e.preventDefault();
    const inputTitle = document.querySelector('#input-title');
    const inputAuthor = document.querySelector('#input-author');
    const inputPages = document.querySelector('#input-pages');
    const inputRead = document.querySelector('#input-read');
    const form = document.querySelector('form');

    // if title and author are not empty and pages is not 0, check to see if read is checked or not, then send values of each input to addBookToLibrary
    if (inputTitle.value !== '' && inputAuthor.value !== '' && inputPages.value > 0) {
        if (inputRead.checked) {
            addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, true);
            form.reset();
        }   else if (!inputRead.checked) {
            addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, false);
            form.reset();
        }
    };
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addBook);
