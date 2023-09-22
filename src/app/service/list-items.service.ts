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

  getListKitchen(): Observable<ListItemsModel[]> {
    return this.http.get<ListItemsModel[]>(this.apiUrl + 'kitchen', this.httpOptions);
  }

  getListRoom(): Observable<ListItemsModel[]> {
    return this.http.get<ListItemsModel[]>(this.apiUrl + 'room', this.httpOptions);
  }

  getListServiceArea(): Observable<ListItemsModel[]> {
    return this.http.get<ListItemsModel[]>(this.apiUrl + 'serviceArea', this.httpOptions);
  }

  getListBathroom(): Observable<ListItemsModel[]> {
    return this.http.get<ListItemsModel[]>(this.apiUrl + 'bathroom', this.httpOptions);
  }

  // updateItem(id: string, value: boolean): Promise<ListItemsModel[]> {
  //   return lastValueFrom(this.http.put<ListItemsModel[]>(`${this.apiUrl}/${id}/${value}`, this.httpOptions))
  // }

  updateItem(id: string, value: boolean) {
    console.log('resposta do check', value);
  }
}
