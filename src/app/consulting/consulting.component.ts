import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html'
})
export class ConsultingComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageLink = 'consulting';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
