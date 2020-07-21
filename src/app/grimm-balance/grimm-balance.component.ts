import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grimm-balance',
  templateUrl: './grimm-balance.component.html'
})
export class GrimmBalanceComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  pageLink = 'balance';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
