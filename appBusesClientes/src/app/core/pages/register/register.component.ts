import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  userForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    direccion: new FormControl(''),
    usuario: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService:UserService, private router:Router){

  }

  nombre = ''
  apellido = ''
  cedula = ''
  telefono = ''
  correo = ''
  direccion = ''
  usuario = ''
  password = ''

  onSubmit(){
    const user = {
      nombre: this.nombre,
      apellido: this.apellido,
      tipoIdentificacion: "1",
      numeroIdentificacion: this.cedula,
      telefono: `${this.telefono}`,
      correo: this.correo,
      direccion: this.direccion,
      usuario: this.usuario,
      password: this.password,
      idRol: 5,
      rol: "Cliente"
    }
    console.log(user);
    
    this.userService.saveUser(user).subscribe(res =>{
      console.log(res);
      Swal.fire(
        'Usuario registrado con exito!',
      )
      this.router.navigate(['/login'])
    })
  }
}
