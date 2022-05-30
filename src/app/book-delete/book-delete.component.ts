import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  //property id store id in memory
  id: any = 0;
  book!: Book;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._BookService.find(id).subscribe(book => {
        this.book = book;
      });
      
    });
  }

  handleYes(){
    this._BookService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/books']);
    }, (e: any) => {
      console.log(e);
    });
    //redirect to books
    //this._Router.navigate(['/books']);
  }
  handleNo(){
    //redirect to books
    this._Router.navigate(['/books']);
  }

}