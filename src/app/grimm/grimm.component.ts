import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

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

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}

export class BooksComponent { }