import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';


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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
