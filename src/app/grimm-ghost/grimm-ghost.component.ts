import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grimm-ghost',
  templateUrl: './grimm-ghost.component.html'
})
export class GrimmGhostComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'ghost';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}

