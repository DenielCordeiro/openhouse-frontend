import { Component } from '@angular/core';
import { ListItemsService } from './service/list-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(public listItemsService: ListItemsService) {
    this.gettingListItems();
    this.updatingItem();
  }

  gettingListItems() {
    this.listItemsService.getList();
  }

  updatingItem() {
    this.listItemsService.updateItem();
  }
}
