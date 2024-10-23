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
    },
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
}



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
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        library.appendChild(bookItem);

        const bookTitle = document.createElement('h1');
        bookTitle.textContent = myLibrary[i].title;
        bookItem.appendChild(bookTitle);

        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = myLibrary[i].author;
        bookItem.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages + ' pages';
        bookItem.appendChild(bookPages);

        const bookRead = document.createElement('button');
        bookRead.setAttribute('read-item-index', i);

        if (myLibrary[i].read == true) {
            bookRead.textContent = 'Read!';
            bookRead.classList.add('book-read');
        }   else {
            bookRead.textContent = 'Not Read';
            bookRead.classList.add('book-not-read')
        }
        bookItem.appendChild(bookRead);

        bookRead.addEventListener('click', () => {
            if (myLibrary[i].read = true) {
                bookRead.textContent = 'Not Read';
                bookRead.classList.remove('book-read');
                bookRead.classList.add('book-not-read');
                myLibrary[i].read = false;
                console.log(myLibrary);
            }   else if (myLibrary[i].read = false) {
                bookRead.textContent = 'read';
                bookRead.classList.remove('book-not-read');
                bookRead.classList.add('book-read');
                myLibrary[i].read = true;
                console.log(myLibrary);
            }
        });

        const deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        deletebtn.classList.add('deleteBtn');
        deletebtn.setAttribute('delete-item-index', i);
        bookItem.appendChild(deletebtn);


        deletebtn.addEventListener('click', () => {
            myLibrary.splice(deletebtn.getAttribute('delete-item-index'), 1);
            displayLibrary();
            console.log(myLibrary);
        })
    }

}
displayLibrary();


function addBook(e) {
    e.preventDefault();
    const inputTitle = document.querySelector('#input-title');
    const inputAuthor = document.querySelector('#input-author');
    const inputPages = document.querySelector('#input-pages');
    const inputRead = document.querySelector('#input-read');
    const form = document.querySelector('form');

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



// function deleteBook() {
//     document.addEventListener('click', e => {
//         const { target } = e;

//         if (target.classList.contains('deleteBtn')) {
//             console.log(target.parentNode);
//             // myLibrary.splice(target.parentNode.parentNode, 1);
//             let removeMe = target.parentElement;
//             myLibrary.filter(removeMe);
//             console.log(myLibrary);
//         }
//     })
// }

// deleteBook();