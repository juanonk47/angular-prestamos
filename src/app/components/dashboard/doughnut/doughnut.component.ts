import { Prestamos } from './../../../models/Prestamos';
import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { Status } from 'src/app/models/Status';
export class PopulationByRegion {
  region: string | undefined;

  val: number | undefined;
}

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
  providers: [PrestamosService]
})
export class DoughnutComponent implements OnInit {
  status: Status[] = [];
  pipe: any = new PercentPipe('es-MX');
  size = 100;

  constructor(
    private servicePrestamo: PrestamosService
  ) {
  }

  ngOnInit(): void {
    this.getall();
  }

  getall(){
    this.servicePrestamo.getStatus().subscribe(data =>{
      this.status = data;
    })
  }

}
