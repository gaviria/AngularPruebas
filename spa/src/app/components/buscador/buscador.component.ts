import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //Para recivir los parametros de la ruta
import {HeroesService} from '../../services/heroes.service'; //Se llama al servivio que tiene los datos a buscar con el parametro pasado ":termino"

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{ //Recoge el valor de las variables en la ruta
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']); //La variable heroes la recibe buscador.component.html
      console.log(this.heroes);
    })
  }

}
