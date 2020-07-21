import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { GrimmComponent } from './grimm/grimm.component';
import { AppRoutingModule } from './app-routing.module';
import { SeriesComponent } from './series/series.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { RedComponent } from './red/red.component';
import { GrimmHiddenComponent } from './grimm-hidden/grimm-hidden.component';
import { GrimmBloodComponent } from './grimm-blood/grimm-blood.component';
import { GrimmGhostComponent } from './grimm-ghost/grimm-ghost.component';
import { GrimmOriginsComponent } from './grimm-origins/grimm-origins.component';
import { GrimmBalanceComponent } from './grimm-balance/grimm-balance.component';
import { ConsultingComponent } from './consulting/consulting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GrimmComponent,
    SeriesComponent,
    ContactComponent,
    HeroComponent,
    RedComponent,
    GrimmHiddenComponent,
    GrimmBloodComponent,
    GrimmGhostComponent,
    GrimmOriginsComponent,
    GrimmBalanceComponent,
    ConsultingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
