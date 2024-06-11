"use strict";
var _a, _b;
class Book1 {
    constructor(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity || 1;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getQuantity() {
        return this.quantity;
    }
    increaseQuantity(amount = 1) {
        this.quantity += amount;
    }
}
class Library1 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        const existingBook = this.findBook(book);
        if (existingBook) {
            existingBook.increaseQuantity();
        }
        else {
            this.books.push(book);
        }
    }
    findBook(book) {
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
console.log((_a = library1.findBook(book6)) === null || _a === void 0 ? void 0 : _a.getQuantity());
console.log((_b = library1.findBook(book7)) === null || _b === void 0 ? void 0 : _b.getQuantity());
