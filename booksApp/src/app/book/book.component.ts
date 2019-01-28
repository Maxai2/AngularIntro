import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { } // ActivateRoute keep info by current link

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id'); // by one used
    // this.book = this.bookService.getBook(id);

    this.route.params.forEach((params) => { // subscribe to event
      const id = +params['id'];
      this.book = this.bookService.getBook(id);
    });
  }

}
