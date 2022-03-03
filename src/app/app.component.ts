import { StoreService } from 'src/app/services/store.service';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as es from 'devextreme/localization/messages/es.json';
import { locale, loadMessages } from "devextreme/localization";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Presta+';
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  apikey = '';
  constructor(private store: StoreService){
    loadMessages(es);
    locale(navigator.language);
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  valueChange(e: any){
    this.apikey = e.target.value;
    this.store.setApikey(e.target.value);
  }
}
