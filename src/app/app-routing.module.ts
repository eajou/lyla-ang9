import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { ContactComponent } from './contact/contact.component';

import { GrimmComponent } from './grimm/grimm.component';
import { OriginsComponent } from './grimm/origins/origins.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'grimm', component: GrimmComponent },
  { path: 'grimm-origins', component: OriginsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }