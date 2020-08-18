import { Component, OnInit } from '@angular/core';
import { StoreService } from '@shared/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.items = this.store.$itemsInCart;
  }

}
