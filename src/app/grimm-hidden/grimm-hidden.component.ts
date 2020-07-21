import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grimm-hidden',
  templateUrl: './grimm-hidden.component.html'
})
export class GrimmHiddenComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'hidden';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
