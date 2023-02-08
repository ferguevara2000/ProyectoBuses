import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http:HttpClient) { }

  urlRutas = 'http://movilmitog-001-site1.etempurl.com/api/Ruta'
  urlBuscar = 'http://movilmitog-001-site1.etempurl.com/buscar'
  url = ''

  loadOrigenesDestinos() : Observable<any>{
    return this.http.get(this.urlRutas)
  }

  loadViajes(viajes:any): Observable<any>{
    return this.http.post(this.urlBuscar, viajes)
  }

  saveViajes(viaje:any): Observable<any>{
    return this.http.post(this.url, viaje);
  }

  updateViajes(id:string, viaje:any): Observable<any>{
    return this.http.put(this.url+id, viaje);
  }

  deleteViajes(id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
