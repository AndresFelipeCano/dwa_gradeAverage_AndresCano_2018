import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UiModule } from './ui/ui.module';

// Component imports
import { AppComponent } from './app.component';
import { PokemainComponent } from './components/pokemain/pokemain.component';

// Routing imports
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PokemainComponent
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
