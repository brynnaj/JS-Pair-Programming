let arr = [];
class Bookshelf {
    constructor() {

    }
    addBook(book) {
        arr.push(book);
        return arr;
    }
    removeBook(book) {
        arr.splice(arr.indexOf(book), 1);
        return arr;
    }

    getTotalBooks() {
        return arr.length;

    }
}

const bookshelf = new Bookshelf();
bookshelf.addBook("The Great Gatsby");
bookshelf.addBook("To Kill a Mockingbird");
bookshelf.addBook("Pride and Prejudice");

console.log(bookshelf.removeBook("To Kill a Mockingbird"));

console.log(bookshelf.getTotalBooks());