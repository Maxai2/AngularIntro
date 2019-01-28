import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  // { path: 'admin/home', component: HomeComponent },
  // { path:  'admin', pathMatch: 'full', redirectTo: 'admin/home'},
  // { path: 'admin/books', component: BooksComponent, children: [
  //   { path: 'edit/:id', component: BookFormComponent }
  // ]}

  { path: 'admin', component: HomeComponent, children: [
    { path: 'books', component: BooksComponent, children: [
      { path: 'edit/:id', component: BookFormComponent }
    ]},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
