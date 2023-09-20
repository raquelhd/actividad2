import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent} from "./components/inicio/inicio.component";
import { ObrasComponent} from "./components/obras/obras.component";
import { EmpresasComponent} from "./components/empresas/empresas.component";
import { PolizasComponent} from "./components/polizas/polizas.component";
import { UsuariosComponent} from "./components/usuarios/usuarios.component";
import { VehiculosComponent} from "./components/vehiculos/vehiculos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent} from "./components/login/login.component";
import { LateralComponent} from "./components/lateral/lateral.component";

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'obras', component: ObrasComponent},
    {path: 'empresas', component: EmpresasComponent},
    {path: 'polizas', component: PolizasComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'vehiculos', component: VehiculosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorComponent},
    {path: 'login', component: LoginComponent},
    {path: 'lateral', component: LateralComponent},
];
export const routing:ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes);