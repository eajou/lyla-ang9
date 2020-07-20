import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html'
})
export class RedComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'red';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
