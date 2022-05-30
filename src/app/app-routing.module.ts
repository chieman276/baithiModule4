import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';



const routes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'book-add', component: BookAddComponent },
    { path: 'book-edit/:id', component: BookEditComponent },
    { path: 'book-delete/:id', component: BookDeleteComponent },
    { path: 'book-detail/:id', component: BookDetailComponent }
  ];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }