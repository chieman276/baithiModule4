import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      bookname: new FormControl('',[
        Validators.required,
      ]),
      author: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ]),

    });
  }

  onSubmit() {
    //handle submit form
    let formData = this.bookForm.value;
    let book: Book = {

      bookname: formData.bookname,
      author: formData.author,
      description: formData.description
    }
    this._bookService.store(book).subscribe(() => {
      //reset form
      this.bookForm.reset();

      //redirect to books
      this._Router.navigate(['/books']);
    }, e => {
      console.log(e);
    });
  }

}