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
  listItems!: ListItemsModel;

  constructor( public listItemsService: ListItemsService ) { }

  ngOnInit(): void {
    this.gettingListItems();
  }

  gettingListItems() {
    this.listItemsService.getList().subscribe(items => {
      this.arrayItems = items;
      //  console.log(this.arrayItems);

    });
  }

  updatingItem(id: any, name: any, value: any) {
    // this.listItemsService.updateItem(id, name, value);

    console.log('dados para atualizar: ', id, name, value);

  }

  // this.arrayItems.forEach(data => {
  //   this.listItems = data;
  //   console.log("lista de items: ", this.listItems);
  // });
}
