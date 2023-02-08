import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://movilmitog-001-site1.etempurl.com/api/Login/Validar'
  urlRegistro = 'http://movilmitog-001-site1.etempurl.com/api/Usuario'
  
  datosSession = new BehaviorSubject<User>(new User())

  constructor(private http:HttpClient) { 
    this.verifySession()
  }

  authentication(user:any): Observable<any>{
    return this.http.post(this.url, user);
  }

  verifySession(){
    let datos = localStorage.getItem("session-data")
    if(datos){
      let datosObject:User = JSON.parse(datos)
      datosObject.isLoggedIn = true
      this.refreshData(datosObject)
    }
  }

  refreshData(user:User){
    this.datosSession.next(user)
  }

  getDataSession(){
    return this.datosSession.asObservable()
  }

  almacenarDatosSesionLocal(user:any):Boolean{
    let datos = localStorage.getItem("session-data")
    if(datos){
      return false
    }else{
      let datosString = JSON.stringify(user)
      localStorage.setItem("session-data", datosString)
      user.isLoggedIn = true
      this.refreshData(user)
      return true

    }
  }

  deleteDataSession(){
    localStorage.removeItem("session-data")
  }

  saveUser(user:any): Observable<any>{
    return this.http.post(this.urlRegistro, user)
  }
}