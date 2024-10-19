import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { conunterModule } from './counter/counter.modulo';
import { superheroesmodulos } from './superheores/superheroes.modulo';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    conunterModule,
    superheroesmodulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
