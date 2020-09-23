import { Component, OnInit, Input, Testability } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-child',
  templateUrl: './grimm.origins.component.html'
})
export class GrimmOriginsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  @Input() bookLink: string;
  @Input() bookName: string;
  @Input() bookDesc: string;  

  ngOnInit(): void {
    this.bookName = 'Origins';
  }

  pageLink = 'child';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }  
}
