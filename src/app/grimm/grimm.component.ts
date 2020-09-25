import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html'
})
export class GrimmComponent implements OnInit {
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

    console.log('getBooks', this.books);
  }

  pageTitle = 'The Grimm Cases';
  pageLink = 'grimm';
  
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }   
}