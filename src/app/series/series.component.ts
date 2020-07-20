import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }  
}