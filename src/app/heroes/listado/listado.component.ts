import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Goku'];
  heroeEliminado:string ='';

  borrarHeroe():void {
    this.heroeEliminado = this.heroes.pop() || '';
  }

  
}
