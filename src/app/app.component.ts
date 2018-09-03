import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private app: AppService,
    private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }

  logout() {
    console.log('iniciando logout');
    this.http.post('logout', {})
      .pipe(finalize(() => {
        console.log('logout concluído');
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      })).subscribe();
  }
}
