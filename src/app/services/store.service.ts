import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private bank_base =  new BehaviorSubject<number>(environment.BASE);
  private value: number = environment.BASE;
  bank_base$ = this.bank_base.asObservable();

  constructor() { }

  reduce_bankbase(price: number){
    this.bank_base.next((this.value - price));
    this.value -= price;
  }
}
