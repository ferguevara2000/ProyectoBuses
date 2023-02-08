import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxPaypalComponent } from 'ngx-paypal/public_api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RutasRoutingModule } from './rutas-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagosComponent } from './tickets/pages/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RutasRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
