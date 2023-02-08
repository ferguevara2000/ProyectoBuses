import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data!:any[]
  @Input() columns!:any[]
  @Input() url!:string
  
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  seleccionar(rowId: any): void{
    const objeto = this.data.find(x => x.idViaje === rowId)
    const encodedData = encodeURIComponent(JSON.stringify(objeto));
    this.router.navigate(['/boletos/compra', { data: encodedData }])
  }
}
