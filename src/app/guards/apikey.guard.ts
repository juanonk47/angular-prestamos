import { StoreService } from 'src/app/services/store.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApikeyGuard implements CanActivate {
  constructor(
    private store: StoreService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let key = '';
      this.store.apikey$.subscribe(data =>{
        key = data;
      })
      if(key === 'secret') {
        return true;
      }else{
        Swal.fire({
          title: 'Permiso denegado!',
          text: 'Tu api key no es correcta',
          icon: 'error',
          confirmButtonText: 'ok'
        });
        return false;
      }
  }

}
