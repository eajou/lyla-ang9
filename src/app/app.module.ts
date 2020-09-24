import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BooksComponent } from './books/books.component';
import { MessagesComponent } from './messages/messages.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    MessagesComponent,
    BookDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }