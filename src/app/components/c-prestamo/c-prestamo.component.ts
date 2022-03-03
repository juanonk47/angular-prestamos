import { StoreService } from './../../services/store.service';
import { Prestamos } from './../../models/Prestamos';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/Usuario';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-c-prestamo',
  templateUrl: './c-prestamo.component.html',
  styleUrls: ['./c-prestamo.component.scss'],
  providers: [FormBuilder,UsuariosService,PrestamosService]
})
export class CPrestamoComponent implements OnInit {
  isLinear = false;
  price = 0;
  spinner = false;
  firstFormGroup: FormGroup = this._formBuilder.group({
    usuario: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    valor: [null,[ Validators.required,Validators.min(10000),Validators.max(100000)]],
    fecha: [new Date(), Validators.required]
  });
  usuarios: Usuario[]= [];
  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder
    ,private serviceUsuarios: UsuariosService,
    private servicePrestamo: PrestamosService,
    private store: StoreService
    ) { }

  ngOnInit(): void {
    this.getAll();
    console.log( );

  }

  getAll(){
    this.serviceUsuarios.getAll().subscribe(data =>{
      this.usuarios = data;
    })
  }

  test(){
    console.log(this.secondFormGroup.value);
    console.log(this.firstFormGroup.value);


  }

  solicitar(){
    this.spinner = true;
    if(Math.random() < 0.5){
      this.servicePrestamo.postPrestamo({pagado:false,accepted: true,idUser: this.firstFormGroup.value.usuario, date: this.secondFormGroup.value.fecha, value: this.secondFormGroup.value.valor}).subscribe(data => {
        setTimeout(() => {
          this.alertAprobaado();
          this.spinner = false;
        }, 3000);
        // this.store.reduce_bankbase(this.secondFormGroup.value.valor);
        this.actualizar.emit(true);
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
      });
    }else{
      this.servicePrestamo.postPrestamo({pagado:false,accepted: false,idUser: this.firstFormGroup.value.usuario, date: this.secondFormGroup.value.fecha, value: this.secondFormGroup.value.valor}).subscribe(data => {
        setTimeout(() => {
          this.alertNO();
          this.spinner = false;
        }, 3000);
      });
    }
  }




  alertAprobaado(){
    Swal.fire({
      title: 'Aprobado!',
      text: 'Tu prestamo a sido aprobado',
      icon: 'success',
      confirmButtonText: 'Perfecto'
    });
  }

  alertNO(){
    Swal.fire({
      title: 'NO aceptado!',
      text: 'Tu prestamo no a sido aprobado',
      icon: 'error',
      confirmButtonText: 'ok'
    });
  }

}
