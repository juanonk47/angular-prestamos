import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApikeyGuard } from 'src/app/guards/apikey.guard';
import { PrestamosComponent } from './prestamos.component';

const routes: Routes = [
  {
    path: '',
    component: PrestamosComponent,
    data: {
      preload: true
    },
    canActivate: [ApikeyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
