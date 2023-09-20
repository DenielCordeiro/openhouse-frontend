import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor() { }

  getList() {
    console.log("teste da função get no serviço");
  }

  updateItem() {
    console.log("teste da função update no serviço");
  }
}
