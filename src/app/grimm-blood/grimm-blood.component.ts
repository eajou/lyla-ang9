import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grimm-blood',
  templateUrl: './grimm-blood.component.html'
})
export class GrimmBloodComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'blood';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
