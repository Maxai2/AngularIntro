import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;

  bookForm: FormGroup;

  get title() {
    return this.bookForm.get('title');
  }

  get year() {
    return this.bookForm.get('year');
  }

  // tslint:disable-next-line:max-line-length
  constructor(private bookService: BookService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router ) { } // ActivateRoute keep info by current link

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id'); // by one used
    // this.book = this.bookService.getBook(id);

    this.route.params.forEach((params) => { // subscribe to event
      const id = +params['id'];
      this.book = this.bookService.getBook(id);
      this.bookForm = this.fb.group({
        title: [this.book.title, [Validators.required]],
        year: [this.book.year, [Validators.required]]
      });
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.book.title = this.bookForm.value.title;
      this.book.year = this.bookForm.value.year;
      // this.bookService.editBook

      // this.router.navigate([
      //   'admin/books'
      // ]);

      this.router.navigate([
        'admin', 'books'
      ]);
    }
  }

}
