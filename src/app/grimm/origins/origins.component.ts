import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html'
})
export class OriginsComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  @Input() bookName: string;
  @Input() bookTag:  string;
  @Input() bookDesc: string;  
  @Input() bookLink: string;

  ngOnInit(): void {
    this.bookName = 'Origins';
    this.bookTag = 'Bianca, a timid and shy university student, has no choice but to step outside her comfort zone to seek answers to her ghostly problems. The only problem is that, because of what she finds, she now has more questions than before.';
    this.bookDesc = ' \
    <p>The things I see aren’t for the faint of heart.</p> \
    <p>And I am no longer willing to ignore them. Not even when my family, and my best friend, tell me to keep quiet about what’s happening. They say people will think I’m crazy.</p> \
    <p>Maybe I am.</p> \
    <p>But the spirit haunting my professor’s house is definitely trying to tell me something, and I’m the only one who can see it.</p> \
    <p>The one person who can help me is my best friend’s brother. But I don’t know if I can trust him or his friends. Or if I can step outside the protective bubble I’ve built around myself.</p> \
    <p>At this point it’s a toss up: the ghosts will kill me or my panic attacks will.</p> \
    <p>Either way, I figure I’m going to die.</p>';  
    this.bookLink = 'https://books2read.com/grimm-origins';  
  }

  pageID = 'bookOrigins';
  pageLink = 'origins';

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }  
}
