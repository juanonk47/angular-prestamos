import { DatagridComponent } from './../../components/usuarios/datagrid/datagrid.component';
import { UsuariosComponent } from './usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormComponent } from 'src/app/components/usuarios/form/form.component';
import { DxDataGridModule } from 'devextreme-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    UsuariosComponent,
    DatagridComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DxDataGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class UsuariosModule { }
