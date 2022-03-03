import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { DoughnutComponent } from './components/dashboard/doughnut/doughnut.component';
import { DxPieChartModule, DxSpeedDialActionModule } from 'devextreme-angular';
import {MatCardModule} from '@angular/material/card';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BancoBaseComponent } from './components/banco-base/banco-base.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoughnutComponent,
    NotFoundComponent,
    BancoBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DxPieChartModule,
    MatCardModule,
    DxSpeedDialActionModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
