import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SeriesComponent } from './series/series.component';
import { GrimmComponent } from './grimm/grimm.component';

import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'grimm', component: GrimmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}