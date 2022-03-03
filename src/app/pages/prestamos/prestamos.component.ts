import { SolicitudesComponent } from './../../components/solicitudes/solicitudes.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  @ViewChild(SolicitudesComponent)
  child!: SolicitudesComponent;

  constructor() { }

  ngOnInit(): void {
  }

  updateList(){
    this.child.getALl();
  }

}
