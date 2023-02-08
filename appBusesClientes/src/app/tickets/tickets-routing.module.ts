import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/pages/login/login.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { InfoTicketsComponent } from './pages/info-tickets/info-tickets.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PurchasedTicketsComponent } from './pages/purchased-tickets/purchased-tickets.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';

const routes: Routes = [
  {path:'', component:TicketsPageComponent},
  {path:'boletos-comprados', component:PurchasedTicketsComponent},
  {path:'info', component:InfoTicketsComponent},
  {path:'compra', component:BuyTicketComponent},
  {path:'pagos', component:PagosComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
