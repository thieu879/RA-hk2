"use strict";
;
let book = {
    title: "cách trở thành người nổi tiếng",
    author: "Nguyễn Gia Thiều",
    price: "1 tị",
};
function printBook(book) {
    console.log(book);
}
printBook(book);
function updateBook(book, title, author, price) {
    book = {
        title: title,
        author: author,
        price: price,
    };
}
updateBook(book, book.title, book.author, book.price);
printBook(book);
