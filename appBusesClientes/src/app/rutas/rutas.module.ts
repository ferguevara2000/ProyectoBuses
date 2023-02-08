import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { RutasPageComponent } from './pages/rutas-page/rutas-page.component';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RutasPageComponent,
    TravelCardComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule,
    SharedModule
  ]
})
export class RutasModule { }
