import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Book } from './book';
import { BOOKS } from './books-details';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    this.messageService.add('getBooks Service: fetched books');
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    this.messageService.add(`getBook Service: fetched id=${id}`);
    return of(BOOKS.find(book => book.id === id));
  }
}