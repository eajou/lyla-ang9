import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { Book } from './books/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  title = 'Grimm Cases Series';
  books = [
    new Book(
      '/grimm-origins', 
      'Origins',
      ' \
      <p>The things I see aren’t for the faint of heart.</p> \
      <p>And I am no longer willing to ignore them. Not even when my family, and my best friend, tell me to keep quiet about what’s happening. They say people will think I’m crazy.</p> \
      <p>Maybe I am.</p> \
      <p>But the spirit haunting my professor’s house is definitely trying to tell me something, and I’m the only one who can see it.</p> \
      <p>The one person who can help me is my best friend’s brother. But I don’t know if I can trust him or his friends. Or if I can step outside the protective bubble I’ve built around myself.</p> \
      <p>At this point it’s a toss up: the ghosts will kill me or my panic attacks will.</p> \
      <p>Either way, I figure I’m going to die.</p>'
    ),
    new Book(
      '/grimm-ghost', 
      'Ghost',
      ' \
      <p>My abilities are growing every day. But thanks to my new friends, I know that I’m not insane.</p> \
      <p>Even so, there’s a darkness inside me. It’s been getting stronger. A reality that I’ve been trying to avoid.</p> \
      <p>Being near the boys draw it out. Being close to them also make me unafraid for the first time in my life.</p> \
      <p>I’ve never felt like this before, but at the same time, my mind has latched onto the feelings they evoke. Julian encourages me, Miles comforts me, Titus protects me, and Damen...</p> \
      <p>Damen gives me something to believe in.</p> \
      <p>We have days to solve this haunting, but my personal issues threaten to overwhelm me. With each passing day, it becomes more difficult to pretend to be normal.</p> \
      <p>And if I falter, for even a moment, then I could lose everything forever.</p>'
    ),
    new Book(
      '/grimm-origins', 
      'Blood',
      'test'
    ),
    new Book(
      '/grimm-origins', 
      'Hidden',
      'test'
    )
  ];
  myBook = this.books[0];  
  
  pageLink = 'books';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }  
}
