import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }