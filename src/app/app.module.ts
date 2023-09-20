import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PieComponent } from './components/pie/pie.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ObrasComponent } from './components/obras/obras.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { LateralComponent } from './components/lateral/lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavegacionComponent,
    PieComponent,
    CabeceraComponent,
    ObrasComponent,
    EmpresasComponent,
    PolizasComponent,
    UsuariosComponent,
    VehiculosComponent,
    ContactoComponent,
    ErrorComponent,
    LoginComponent,
    LateralComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
