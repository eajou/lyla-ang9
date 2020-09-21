import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from './../books/books';

console.log('The Grimm Component is Running');
@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html',
})

export class GrimmComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  pageLink = 'grimm';

  title = 'Grimm Cases Series';
  books = [
    new Book(
      '/grimm-origins', 
      'origins'
    ),
    new Book(
      '/grimm-ghost', 
      'ghost'
    ),
    new Book(
      '/grimm-origins', 
      'blood'
    ),
    new Book('/grimm-origins', 'hidden')
  ];
  myBook = this.books[0];  

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}

console.log('The Grimm Component is Ending');