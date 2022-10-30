import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [          // Se colocan los componentes de mi modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[               // Cosas visibles fuera del modulo
        ListadoComponent
    ],
    imports: [              // Solo van modulos: CommonModule se utiliza cuando usa comandos *ng
        CommonModule 
    ]                         
})
export class HeroesModule {}