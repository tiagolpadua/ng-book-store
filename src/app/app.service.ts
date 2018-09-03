import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;

  constructor(private http: HttpClient) {}

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(
      credentials
        ? {
            authorization:
              'Basic ' + btoa(credentials.username + ':' + credentials.password)
          }
        : {}
    );

    // this.http.get('user', { headers: headers }).subscribe(response => {
    this.http.get('http://172.24.33.82:8082/books/user', { headers: headers })
    .subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    }, error => {
      console.log('Erro ao autenticar: ');
      console.log(error);
      this.authenticated = false;
    });
  }
}
