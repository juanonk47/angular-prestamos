import Swal  from 'sweetalert2';
import { StoreService } from 'src/app/services/store.service';
import { Prestamos } from './../../models/Prestamos';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { switchMap, map } from 'rxjs';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
  providers: [PrestamosService,UsuariosService]
})
export class SolicitudesComponent implements OnInit {

  dataSource= new MatTableDataSource<any>();;
  displayedColumns: string[] = ['nombreUsuario', 'value', 'Estatus', 'Acciones'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private servicePrestamos: PrestamosService,
    private serviceUsuario: UsuariosService,
    private store: StoreService) {}

  ngOnInit() {
    this.getALl();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getALl(){
    this.servicePrestamos.getAllAproved().subscribe(prestamo => {

      let promesa = new Promise((resolve)=>{
        prestamo.forEach(item => {
          this.serviceUsuario.getbyId(item.idUser).subscribe(data =>{
            if(data[0]){
              item.nombreUsuario = data[0].nombre
            }
          });
        })
        resolve(prestamo)
      })

      promesa.then((data) => {
        this.dataSource.data = <Array<any>>data;
        console.log(data);

      })

    })
  }

  pagarPrestamo(e: any){
    this.servicePrestamos.pagarPrestamo(e).subscribe(data => {
      this.store.reduce_bankbase(e.value);
      this.getALl();
      Swal.fire({
        title: 'Pagado!',
        text: 'Tu prestamo a sido pagado',
        icon: 'success',
        confirmButtonText: 'Perfecto'
      });
    });
  }

}
