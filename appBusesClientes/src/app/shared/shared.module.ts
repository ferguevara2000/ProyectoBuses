import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],exports:[
    NavBarComponent,
    CardComponent,
    TableComponent,
  ]
})
export class SharedModule { }
