import { UsuariosService } from 'src/app/services/usuarios.service';
import { map, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Prestamos } from '../models/Prestamos';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private apiUrl = `${environment.API_URL}prestamos`

  constructor(
    private http: HttpClient,
    private serviceUsuario: UsuariosService
  ) { }

  getStatus(){
    return this.http.get<Prestamos[]>(`${this.apiUrl}`)
    .pipe(
      retry(3),
      map(prestamo => {
        let statusno: Status={accepted: 'No',val:0};
        let statusyes: Status={accepted: 'Si',val:0};
        prestamo.forEach(item => {
          if(item.accepted){
            statusyes.val+= item.value;
          }else{
            statusno.val+= item.value;
          }
        });
        return [statusno,statusyes];
      })
    )
  }

  postPrestamo(prestamo: Prestamos){
    return this.http.post<Prestamos>(`${this.apiUrl}`,prestamo).pipe(
      retry(3)
    )
  }

  getALl(){
    return this.http.get<Prestamos[]>(`${this.apiUrl}`).pipe(
      retry(3),
    )
  }

  getAllAproved(){
    return this.http.get<Prestamos[]>(`${this.apiUrl}?accepted=true`).pipe(
      retry(3),
    )
  }
  pagarPrestamo(prestamo: Prestamos){
    prestamo.pagado = true;
    return this.http.put<Prestamos>(`${this.apiUrl}/${prestamo.id}`,prestamo).pipe(
      retry(3)
    )
  }

}
