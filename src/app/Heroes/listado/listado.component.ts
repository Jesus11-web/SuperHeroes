import { removeSummaryDuplicates, ThrowStmt, splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['hulk','SAITAMA','SUPERMAN','goku'];
eliminar: string[] = []
indice:number = 0;
  removeItem(i: number){

    this.indice=this.indice+i;
    this.eliminar = this.heroes.splice(i,1);

  }
}