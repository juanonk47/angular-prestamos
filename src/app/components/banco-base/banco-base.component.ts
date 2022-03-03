import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Bank } from 'src/app/models/Bank';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-banco-base',
  templateUrl: './banco-base.component.html',
  styleUrls: ['./banco-base.component.scss'],
  providers: [CurrencyPipe]
})
export class BancoBaseComponent implements OnInit {
  base_banco!: string;
  constructor(private cp: CurrencyPipe, private store: StoreService) { }

  ngOnInit(): void {
    this.store.bank_base$.subscribe(bank_base => {
      this.base_banco = this.cp.transform(bank_base) || '';
    })
  }

  test(){
    this.store.reduce_bankbase(100);
  }

}
