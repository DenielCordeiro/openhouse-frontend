import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { ListItemsModel } from '../model/list-items.model';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  apiUrl: string = 'http://localhost:3334/items';

  httpOptions: {} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http : HttpClient) {}

  getList(): Observable<ListItemsModel[]> {
    return this.http.get<ListItemsModel[]>(this.apiUrl, this.httpOptions);
  }

  // updateItem(id: string, name: string, value: boolean): Promise<ListItemsModel[]> {
  //   return lastValueFrom(this.http.put<ListItemsModel[]>(`${this.apiUrl}/${id}/${name}/${value}`, this.httpOptions))
  // }

  updateItem(id: string, name: string, value: boolean) {
    console.log('resposta do check', value);
  }
}
