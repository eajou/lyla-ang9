import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { BookComponent } from './book/book.component';
// import { GrimmComponent } from './book/grimm/grimm.component/';
// import { GrimmOriginsComponent } from './grimm-origins/grimm-origins.component';
// import { GrimmGhostComponent } from './grimm-ghost/grimm-ghost.component';
// import { GrimmBloodComponent } from './grimm-blood/grimm-blood.component';
// import { GrimmHiddenComponent } from './grimm-hidden/grimm-hidden.component';
// import { GrimmBalanceComponent } from './grimm-balance/grimm-balance.component';
import { RedComponent } from './red/red.component';
import { SeriesComponent } from './series/series.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ContactComponent } from './contact/contact.component';

import { GrimmComponent } from './grimm/grimm.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'book', component: BookComponent },
  { path: 'series', component: SeriesComponent },
  // { path: 'grimm', component: GrimmComponent },
  // { path: 'grimm-origins', component: GrimmOriginsComponent },
  // { path: 'grimm-ghost', component: GrimmGhostComponent },
  // { path: 'grimm-blood', component: GrimmBloodComponent },
  // { path: 'grimm-hidden', component: GrimmHiddenComponent },
  // { path: 'grimm-balance', component: GrimmBalanceComponent },
  { path: 'red', component: RedComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'grimm', component: GrimmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }