import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grimm-origins',
  templateUrl: './grimm-origins.component.html'
})
export class GrimmOriginsComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'origins';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
