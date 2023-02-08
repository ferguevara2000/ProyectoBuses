import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environments';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url = environment.baseUrl
  login = false
  token = ''

  userForm: FormGroup = new FormGroup({})

  constructor(private userService: UserService, private router: Router, private fb:FormBuilder) {
    this.construirFormulario()
  }

  ngOnInit(): void {
    this.construirFormulario()
  }
  username:string = ''
  password:string = ''
  id:number = 0

  construirFormulario (){
    this.userForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  onSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    this.userService.authentication(user).subscribe(data => {
      this.token = data.token
      this.userService.almacenarDatosSesionLocal(data)
      this.router.navigate([''])
    })

    this.userService.getDataSession().subscribe(data =>{
      if (data.isLoggedIn) {
        this.login = false
      }else{
        this.login = true
      }
    })
  }

  get obtenerValidador(){
    return this.userForm.controls
  }
}
