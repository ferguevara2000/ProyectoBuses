import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environments';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataTickets: any[] = []
  dataViajes: any[] = []
  mostrar:boolean = true
  origenSel:string = ''
  destinoSel:string = ''
  viajesForm = new FormGroup({
    origen: new FormControl(''),
    destino: new FormControl(''),
    fecha: new FormControl(''),
  })

  columns: any[] = [
    {field: 'cooperativa', title: 'Cooperativa' },
    {field: 'fecha', title: 'Fecha'},
    { field: 'horaSalida', title: 'Hora de Salida'},
    {field: 'numAsientosDisponibles', title: 'Asientos Disponibles'}
  ];

  constructor(private viajesService:ViajesService){
    this.loadOrigenesDestinos();
  }

  loadOrigenesDestinos(){
    this.viajesService.loadOrigenesDestinos().subscribe(data => {
      this.dataViajes = data
      console.log(data)
    }), (error:any) =>{
      console.log(error)
    }
  }

  capturarOrigen(){
    return this.origenSel.toString()
  }

  capturarDestino(){
    return this.destinoSel.toString()
  }

  onSubmit(){
    const origen = this.capturarOrigen()
    const dest = this.capturarDestino()
    const origenDest = {
      origen: origen,
      destino: dest
    }
    console.log(origenDest)
    this.viajesService.loadViajes(origenDest).subscribe(data => {
      this.dataTickets = data
      console.log(data)
    }), (error:any) =>{
      console.log(error)
    }
  }

  mostrarUser(){
    console.log(environment.user.toString())
  }
}
