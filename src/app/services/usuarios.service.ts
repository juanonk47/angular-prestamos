import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = `${environment.API_URL}usuario`

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Usuario[]>(`${this.apiUrl}`).pipe(
      retry(3)
    )
  }

  postUsuario(usuario: Usuario){
    return this.http.post<Usuario>(`${this.apiUrl}`,usuario).pipe(
      retry(3)
    )
  }

  putUsuario(usuario: Usuario){
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`,usuario).pipe(
      retry(3)
    )
  }

  deleted(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      retry(3)
    )
  }

  getbyId(id?: number){
    return this.http.get<Usuario[]>(`${this.apiUrl}?id=${id}`).pipe(
      retry(3)
    )
  }

}
