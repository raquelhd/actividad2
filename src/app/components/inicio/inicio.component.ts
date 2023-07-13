import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public usuario:string;

  constructor() {
    this.usuario = "Debería mostrar el nombre del usuario validado";
    this.usuario = "Debería mostrar el nombre del usuario validado";
  }
}
