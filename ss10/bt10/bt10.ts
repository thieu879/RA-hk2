class Book1 {
    private quantity: number;

    constructor(private title: string, private author: string, quantity?: number) {
        this.quantity = quantity || 1;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuantity(): number {
        return this.quantity;
    }

    increaseQuantity(amount: number = 1): void {
        this.quantity += amount;
    }
}

class Library1 {
    private books: Book1[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book1): void {
        const existingBook = this.findBook(book);
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.books.push(book);
        }
    }

    findBook(book: Book1): Book1 | undefined {
        return this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
    }
}

// Sử dụng
const library1 = new Library1();

const book6 = new Book1("The Great Gatsby", "F. Scott Fitzgerald", 2);
const book7 = new Book1("To Kill a Mockingbird", "Harper Lee");
const book8 = new Book1("The Great Gatsby", "F. Scott Fitzgerald");

library1.addBook(book6);
library1.addBook(book7);
library1.addBook(book8);

console.log(library1);
console.log(library1.findBook(book6)?.getQuantity());
console.log(library1.findBook(book7)?.getQuantity());
