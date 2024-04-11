class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Tên sách: ${book.getTitle()}` );   
            console.log(`Tác giả: ${book.getAuthor()}` );
            console.log("");                      
        });
    }
}

const book1 = new Book("Nhà giả kim", "Paulo Coelho");
const book2 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
const book3 = new Book("Tội Ác Và Hình Phạt", "Fyodor Dostoevsky");
const book4 = new Book("Harry Potter", "J. K. Rowling");
const book5 = new Book("Tỷ Phú Bán Giày", "Tony Hsieh");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.showBooks();
