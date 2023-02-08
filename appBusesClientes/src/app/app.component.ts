import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appBusesClientes'
  loguear: boolean = true
  user = 'Iniciar Sesión'

  constructor(){
  }

  ngOnInit(): void {
  }
}
