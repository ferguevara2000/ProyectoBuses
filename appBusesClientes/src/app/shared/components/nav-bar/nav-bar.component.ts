import { Component, OnInit, Input } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environments';
import {usuario} from 'src/app/variables'
import { UserService } from 'src/app/core/services/user.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Input() usuario: any
  isLoggedIn = false
  url = ''
  login = 'login'
  user = ''
  closeSession = ''
  listMenu:IMenu[];
  subscription = new Subscription()

  constructor(private menuService:MenuService, private userService: UserService) { 
    this.listMenu = this.menuService.getMenu();
    console.log(this.user)
   }

   ngOnInit(): void {
    this.subscription =this.userService.getDataSession().subscribe(data =>{
      this.isLoggedIn = data.isLoggedIn
    }),(error:any) =>{
      console.error(error);
    }
  }

  cerrarSession(){
    this.isLoggedIn = false
    this.userService.deleteDataSession()
    Swal.fire(
      'Vuelve Pronto'
    )
  }
}
