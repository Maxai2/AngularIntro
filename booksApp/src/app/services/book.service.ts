import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    new Book(1, 'Book qweeerty', 1992),
    new Book(2, 'Book qwee', 1996),
    new Book(3, 'Book qweghg12erty', 1994),
    new Book(4, 'Book qweeegfrty', 1994),
    new Book(5, 'Book qwefgy', 1997)
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }

  getBook(id: number) {
    return this.books.find((b) => b.id === id);
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  findBook(year: number) {
    return this.books.filter((b) => b.year === year );
  }
}
