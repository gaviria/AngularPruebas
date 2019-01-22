import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //Nos permite navegar a una ruta como en la función buscarHeroe

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    //console.log(termino);
    this.router.navigate(['/buscar',termino]); //pasa a la ruta buscar con la variable termino
  }
}
