import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url = 'http://movilmitog-001-site1.etempurl.com/asientos/'

  constructor(private http:HttpClient) { }

  loadTickets(id:Number): Observable<any>{
    return this.http.get(`${this.url}${id}`)
  }
}
