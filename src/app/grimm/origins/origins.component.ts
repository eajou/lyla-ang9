import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html'
})
export class OriginsComponent implements OnInit {

  constructor() { }

  @Input() bookLink: string;
  @Input() bookName: string;
  @Input() bookDesc: string;  

  ngOnInit(): void {
    this.bookName = 'Origins';
  }

}
