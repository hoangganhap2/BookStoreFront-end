import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:8080/api/admin/book';

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + id);
  }

  createBook(book: IBook): Observable<any> {
    console.log(book);
    return this.http.post(this.url, book);
  }

  editBook(book: IBook): Observable<any> {
    return this.http.put(this.url + '/' + book.id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
