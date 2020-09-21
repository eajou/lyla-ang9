import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from './book';

@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html',
})

export class GrimmComponent implements OnInit {

  books = [
    new Book(1, 'Windstorm'),
    new Book(13, 'Bombasto'),
    new Book(15, 'Magneta'),
    new Book(20, 'Tornado')
  ];
  myBook = this.books[0];  

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'grimm';
}