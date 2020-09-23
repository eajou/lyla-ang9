import { Component } from '@angular/core';

import { Book } from './books/books';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'lyla';

  firstName: string;
  lastName: string;
  siblings: Array<string>;
  
  ngOnInit(){
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }  
}
