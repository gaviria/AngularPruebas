import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
//Input dice que se va a recibir una propiedad desde afuera 'heroe'
//Output, EventEmitter cuando queremos emitir una salida

import { Router } from '@angular/router'; //Redireccionar cosas
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe:any={}; //Se usa el decorador para decir que la propiedad puede venir de afuera
  @Input() index:number;
  @Output() heroeSeleccionado:EventEmitter<number>; //Variable a emitir al pade

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter; //Se inicializa la variable a emitir al padre
  } //Se debe inicializar router

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]); //se usa router
    //this.heroeSeleccionado.emit(this.index);
  }

}
