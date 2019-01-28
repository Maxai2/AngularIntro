import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  year: number;
  books: Book[];

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      const year = +params['year'];
      if (!isNaN(year)) {
        this.books = this.bookService.findBook(year);
        this.year = year;
      } else {
        this.books = this.bookService.getBooks();
        this.year = NaN;
      }
    });
    // this.books = this.bookService.getBooks();
  }

  search() {
    this.router.navigate([
      // 'books', 'id' }
      'books', { year: this.year }
    ]);
  }
}
