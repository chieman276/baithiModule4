import { Component, OnInit } from '@angular/core';
import { BookService } from "./../book.service";
import { Book } from "./../book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[] = [];
  count: number = 0;
  keyword:string = '';
  constructor(
    private _BookService:BookService
  ) { }

  ngOnInit(): void {
    this._BookService.getAll().subscribe(books => {
      this.books = books;
      this.count = this.books.length;
    });
  }


}
// ngOnInit() {
//   this.bookService.getAll().subscribe(books => {
//     this.books = books;
//     this.count = this.books.length;
//   })
// }