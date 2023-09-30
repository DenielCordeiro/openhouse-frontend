import { Component, OnInit } from '@angular/core';
import { ListItemsService } from './service/list-items.service';
import { ListItemsModel } from './model/list-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  itemsKitchen!: ListItemsModel[];
  itemsRoom!: ListItemsModel[];
  itemsServiceArea!: ListItemsModel[];
  itemsBathroom!: ListItemsModel[];
  loading: boolean = false;
  toDoListChecked: string = 'to-do-list-checked';

  constructor(
    public listItemsService: ListItemsService,
  ) { }

  ngOnInit(): void {
    this.getAllLists();
  }

  getAllLists(): void {
    this.gettingListItemsKitchen();
    this.gettingListItemsRoom();
    this.gettingListItemsServiceArea();
    this.gettingListItemsBathroom();
  }

  gettingListItemsKitchen(): void {
    this.listItemsService.getListKitchen().subscribe(items => {
      this.itemsKitchen = items;
    });
  }

  gettingListItemsRoom(): void {
    this.listItemsService.getListRoom().subscribe(items => {
      this.itemsRoom = items;
    });
  }

  gettingListItemsServiceArea(): void {
    this.listItemsService.getListServiceArea().subscribe(items => {
      this.itemsServiceArea = items;
    });
  }

  gettingListItemsBathroom(): void {
    this.listItemsService.getListBathroom().subscribe(items => {
      this.itemsBathroom = items;
    });
  }

  updatingItem(id: any, value: any): void {
    if (value == true) {
      this.listItemsService.updateItem(id, value = false);
      this.onLoading();
      this.getAllLists();
    } else {
      this.listItemsService.updateItem(id, value = true);
      this.onLoading();
      this.getAllLists();
    }
  }

  onLoading() {
    this.loading = true;
    this.getAllLists();

    setTimeout(() => {
      this.loading = false;
      console.log(this.loading);
    }, 3000);
  }
}
