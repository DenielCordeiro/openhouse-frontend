import { Component, OnInit } from '@angular/core';
import { ListItemsService } from './service/list-items.service';
import { ListItemsModel } from './model/list-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  arrayItems!: ListItemsModel[];
  checkbox: any = document.querySelector('.checkbox:checked');

  constructor( public listItemsService: ListItemsService ) { }

  ngOnInit(): void {
    this.gettingListItems();
  }

  observableCheckbox(): void {
    let checkbox = document.querySelector('Input');
    console.log('checkbox: ', checkbox);
  }

  gettingListItems(): void {
    this.listItemsService.getList().subscribe(items => {
      this.arrayItems = items;
    });

    this.checkbox;
  }

  updatingItem(id: any, name: any, value: any, event: Event): void {
    var eventChecked: any = event;

    if (eventChecked.target?.checked === true) {
      this.listItemsService.updateItem(id, name, value = true);
    } else {
      this.listItemsService.updateItem(id, name, value = false);
    }
  }
}
