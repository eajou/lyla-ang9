import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from './../books/books';

console.log('The Grimm Component is Running');
@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html',
})

export class GrimmComponent implements OnInit {

  // @Input() name: string;  

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  pageLink = 'grimm';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }   
}

console.log('The Grimm Component is Ending');