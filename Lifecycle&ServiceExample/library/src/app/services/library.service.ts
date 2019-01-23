import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  books: Book[] = [
    new Book(1, '.Net Framework via C#', 2008),
    new Book(2, 'Java Script for beginner', 2015),
    new Book(3, 'Pro Angular', 2018)
  ];
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.find(function(b) { return b.id === id; });
  }
}
