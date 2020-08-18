import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  $itemsInCart = new BehaviorSubject<number>(0);
  constructor() { }
}
