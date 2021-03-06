import { ApikeyGuard } from 'src/app/guards/apikey.guard';
import { UsuariosComponent } from './usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
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
export class UsuariosRoutingModule { }
