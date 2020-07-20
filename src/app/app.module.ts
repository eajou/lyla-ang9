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
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
