import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  curBook: Book;
  books: Book[];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.books = this.libraryService.getBooks();
  }

  showBook(id: number) {
    this.curBook = this.libraryService.getBook(id);
  }

}
