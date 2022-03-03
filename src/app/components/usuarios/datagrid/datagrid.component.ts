import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
  providers: [UsuariosService]
})
export class DatagridComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(
    private services: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.services.getAll().subscribe(data => {
      this.usuarios = data;
    })
  }

  save(e:any){
    this.services.postUsuario(e.data).pipe(
    ).subscribe(() => {
      this.getData();
    })
  }
  update(e: any){
    this.services.putUsuario(e.data).pipe()
    .subscribe(()=>{
      this.getData();
    })
  }

  deleted(e: any){
    this.services.deleted(e.data.id).subscribe(()=>{
      this.getData();
    })
  }
}
