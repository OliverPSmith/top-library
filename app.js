const myLibrary = [
    {
        title: 'Lord of the rings',
        author: 'JRR Tolkien',
        pages: 500,
        read: false,
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
}

function addBookToLibrary() {
    const harryP = new Book('Harry Potter', 'JK Rowling', '200', true);
    myLibrary.push(harryP);
}
addBookToLibrary();
console.log(myLibrary)
