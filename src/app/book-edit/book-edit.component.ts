import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: any = 0;
  
  bookForm!: FormGroup;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      
      //thay doi gia tri thuoc tinh de su dung cho edit
      this.id = id;
      this._BookService.find(id).subscribe(book => {
        //fill input to form
        this.bookForm = new FormGroup({
          bookname: new FormControl(book.bookname,[
            Validators.required,
          ]),
          author: new FormControl(book.author,[
            Validators.required
          ]),
          description: new FormControl(book.description,[
            Validators.required
          ]),
        });
      });

      

      //build with reactiform form
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
    // call service update
    this._BookService.update(this.id, book).subscribe(() => {
      //redirect to books
      this._Router.navigate(['/books']);
    }, e => {
      console.log(e);
    });
  }

}