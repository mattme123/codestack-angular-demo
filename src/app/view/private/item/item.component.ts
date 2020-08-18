import { Component, OnInit } from '@angular/core';
import { StoreService } from '@shared/services/store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  cartAdd() {
    this.storeService.$itemsInCart.next(this.storeService.$itemsInCart.value + 1);
  }

}
