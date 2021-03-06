import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html'
})
export class RedComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(books => this.books = books);
  }

  pageLink = 'red';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }   
}