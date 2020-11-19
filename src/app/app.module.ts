import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//rutas

import {APP_ROUTING } from './app.routes';

//servicios

import { HeroesService } from './components/servicios/heroes.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
   HeroesService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
