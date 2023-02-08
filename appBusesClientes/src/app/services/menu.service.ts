import { Injectable } from '@angular/core';

export interface IMenu {
  tittle: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    { tittle: 'Boletos Comprados', url: '/boletos', icon: 'bi bi-ticket-fill' }
  ];

  constructor() { }

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }
  
  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
