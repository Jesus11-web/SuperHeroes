import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['hulk','saitama','superman','goku'];
  
  removeItem(i: number){
    this.heroes.splice(i, 1);
  }

}
