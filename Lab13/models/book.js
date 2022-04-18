let books = [
    {
    "id" : "1",
    "title" : "C++" , 
    "isbn" : "AAA" ,
    "publishedDate" : "2021-02-12" ,
    "author" : "Demetry John"
    }
];

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(p => p.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('Book NOT Found to update');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('ID NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            books = books.filter(p => p.id !== bookId);
        } else {
            throw new Error('ID NOT Found to delelete');
        }
    }

}
