import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html'
})
export class GrimmComponent implements OnInit {

  constructor() { }

  // data
  bookLink: string;
  bookName: string;
  bookDesc: string;

  ngOnInit(): void {
  }

}
