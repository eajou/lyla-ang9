import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grimm',
  templateUrl: './grimm.component.html'
})
export class GrimmComponent implements OnInit {

  constructor() { }

  // data
  bookName: string;
  bookTag:  string;
  bookDesc: string;
  bookLink: string;

  ngOnInit(): void {
  }

}
