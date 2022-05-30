import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Book} from "./book";
import {environment} from './../environments/environment';
import { Observable } from 'rxjs';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(
    private http: HttpClient
  ) { }

  //lay tat ca
  getAll():Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  //lay 1 item theo id
  find( id:any ):Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  //store
  store( book:Book ): Observable<Book>{
    return this.http.post<Book>(API_URL + '/books', book);
  }

  // show(id:any, book:book ): Observable<book>{
  //   return this.http.get<book>(`${API_URL}/books/${id}`, book);
  // }

  //update
  update( id:number, book:Book ): Observable<Book>{
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }

  //destroy
  destroy(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }


}