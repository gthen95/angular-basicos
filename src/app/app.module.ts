import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contado.module';

// En Declarations se colocan los componentes que se estan utilizando
// En imports se colocan otros modulos
// En export se colocan las cosas quiero que sean visibles fuera del module
// En providers Son servicios a un modulo
// En bootstrap Se coloca el componente principal

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


