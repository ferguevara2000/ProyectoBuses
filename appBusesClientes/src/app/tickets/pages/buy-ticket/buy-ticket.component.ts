import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { info_tickets } from 'src/environments/environments';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent {
  data:any
  numAsientos:number = 0
  idViaje:number = 0
  dataAsientos:any[] = []
  dataTickets:any[] = []
  dataCompra:any[] = []
  checkboxValue = false
  total:number = 0
  showTotal = false
  isChecked = false
  color = 'red'
  columns:any[] = [
    {field: 'idAsiento', title:'#'},
    {field: 'desAsiento', title: 'Descripción'},
    {field: 'categoria', title: 'Descripción'},
    {field: 'recargo', title: 'Descripción'},
    {field: 'precioFinal', title: 'Descripción'}
  ]

  constructor(private route:ActivatedRoute, private ticketsService:TicketsService, private router: Router, private renderer: Renderer2, private el: ElementRef){
    this.route.params.subscribe( params => {
      const encodedData = params['data']
      this.data = JSON.parse(decodeURIComponent(encodedData));
      console.log(this.data)
    })
    this.llenarAsientos()
  }

  ngOnInit(){
  }

  llenarAsientos(){
    const id = this.data.idViaje
    this.ticketsService.loadTickets(id).subscribe(res => {
      this.dataTickets = res
      console.log(res)
      for (let i = 0; i <= this.dataTickets.length; i++) {
        const item = {numero: i+1, num: res[i].idAsiento}
        this.dataAsientos.push(item)
      }
    })
  }

  capturar(event:any){
    const id = event.target.id
    let checkbox = document.getElementById(id)
    const objeto = this.dataTickets.find(x => x.idAsiento == id)
    info_tickets.idAsiento = objeto.idAsiento
    console.log(objeto);
    this.dataCompra.push(objeto)
    this.calculoTotal()
    this.showTotal = true
    checkbox?.setAttribute('disabled','true')
  }

  eliminarBoleto(id:number){
    const index = this.dataCompra.findIndex(x => x.idAsiento == id)
    const tot = this.dataCompra.find(x => x.idAsiento == id)
    this.dataCompra.splice(index)
    this.total -= tot.precioFinal
    let checkbox = document.getElementById(`${id}`)
    checkbox?.removeAttribute('disabled')
    this.color = this.color === 'red' ? 'green' : 'red';
    this.isChecked = true
  }

  calculoTotal(){
    this.total = 0
    for (let i = 0; i < this.dataCompra.length; i++) {
      this.total += this.dataCompra[i].precioFinal
    }
  }

  comprarBoleto(){
    // const jsonString = localStorage.getItem('session-data')
    // var obj = JSON.parse(`${jsonString}`)
    // var username = obj.usuario.id
    // const objeto = {
    //   username : username,
    //   idAsiento : info_tickets.idAsiento,
    //   total: this.total
    // }
    // const encodedData = encodeURIComponent(JSON.stringify(objeto));
    this.router.navigate(['/boletos/pagos'])
  }
}
