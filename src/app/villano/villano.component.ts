import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
 selector: 'app-villano',
 templateUrl: './villano.component.html',
 styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
selectedVillano?: Villano;
villanos: Villano[]=[
 {id:1, name: "El Batman que Rie", nivel: 100000000, namepower: "Inteligencia"},
 {id:2, name: "La Muerte Roja", nivel: 1000000, namepower: "Velocidad"},
 {id:3, name: "Derdevil", nivel:5500, namepower: "Agilidad"},
 {id:4, name: "Thanos", nivel:7000, namepower: "Fuerza"},
 {id:5, name: "Doctor Misterio", nivel:100000, namepower: "Magia"},
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
