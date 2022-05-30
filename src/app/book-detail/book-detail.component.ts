import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id:any = 0;
  book !: Book;
  constructor(private bookService: BookService,private Router: Router,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.bookService.find(id).subscribe((book)=>{
        this.book = book;
      })
    })
  }

}
