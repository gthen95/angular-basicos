import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// En Declarations se colocan los componentes que se estan utilizando
// En imports se colocan otros modulos
// En export se colocan las cosas quiero que sean visibles fuera del module
// providers Son servicios a un modulo
// bootstrap Se coloca el componente principal

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}