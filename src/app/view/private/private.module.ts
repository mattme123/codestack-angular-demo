import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [LayoutComponent, UsersComponent, LoginComponent, ItemComponent, CartComponent, StoreComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
