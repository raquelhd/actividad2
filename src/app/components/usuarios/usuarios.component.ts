import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  checkoutForm: any;

  @Input() public usr: Usuarios = new Usuarios(0,"","","");

}
