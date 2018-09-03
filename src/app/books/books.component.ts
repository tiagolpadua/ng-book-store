import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:8082/books')
      .toPromise()
      .then((res: any) => {
        this.books = res;
      });
  }

}
