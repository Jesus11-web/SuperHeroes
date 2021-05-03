import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './Villano';
@Component({
 selector: 'app-villano',
 templateUrl: './villano.component.html',
 styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
selectedVillano?: Villano;
villanos: Villano[]=[
 {id:1, name: "joker", nivel: 100, namepower: "inteligencia"},
 {id:2, name: "madara", nivel: 10000, namepower: "sharingan"},
 {id:3, name: "orochimaru", nivel:6000, namepower: "regeneracion"},
 {id:4, name: "freezer", nivel:6000, namepower: "fuerza"},
 {id:5, name: "galactus", nivel:1000000, namepower: "todo poderoso "},
];
 numero = 0;
 base = 5;
 constructor() { }
 ngOnInit() {
 }
 onSelect(villano: Villano): void {
 this.selectedVillano = villano;
 }
 acumulador(valor:number){
 this.numero += valor;
 }
 sumar(){
 this.numero +=1;
 } restar(){
 this.numero -=1;
 }
}
