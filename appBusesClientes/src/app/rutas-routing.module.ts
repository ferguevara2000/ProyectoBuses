import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'rutas', loadChildren:() => import('./rutas/rutas.module').then(m => m.RutasModule)},
  {path : 'boletos', loadChildren:() => import('./tickets/tickets.module').then(m => m.TicketsModule)},
  {path : 'usuario', loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  {path : 'login', loadChildren:() => import('./core/pages/login/login.component').then(m => m.LoginComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
