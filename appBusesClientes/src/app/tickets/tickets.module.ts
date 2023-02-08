import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { SharedModule } from '../shared/shared.module';
import { PurchasedTicketsComponent } from './pages/purchased-tickets/purchased-tickets.component';
import { InfoTicketsComponent } from './pages/info-tickets/info-tickets.component';
import { BuyTicketComponent } from './pages/buy-ticket/buy-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagosComponent } from './pages/pagos/pagos.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    TicketsPageComponent,
    PurchasedTicketsComponent,
    InfoTicketsComponent,
    BuyTicketComponent,
    PagosComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule
  ],
  exports: [
    PurchasedTicketsComponent,
    InfoTicketsComponent
  ]
})
export class TicketsModule { }
