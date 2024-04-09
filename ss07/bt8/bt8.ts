interface book{
    title:string,
    author:string,
    price:string,
};
let book = {
    title: "cách trở thành người nổi tiếng", 
    author: "Nguyễn Gia Thiều",
    price: "1 tị",
};

function printBook(book:unknown):void{
    console.log(book);
    
}
printBook(book);

function updateBook(book:unknown, title:string, author:string, price:string):void{
    book = {
        title: title,
        author: author,
        price: price,
    }
}
updateBook(book, book.title, book.author, book.price);
printBook(book);