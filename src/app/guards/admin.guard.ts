import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from './../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor( private usuarioService : UsuarioService,
              private router : Router ){
                

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      if(this.usuarioService.role === 'ADMIN_ROLE')
      {
        //Lo dejo entrar
        return true;

      }
      else
      {
      
        //No lo dejo entrar
        //Lo direccionamos al dashboard
        //Si lo sacamos al login purar el login y el menu
        this.router.navigateByUrl('/dashboard');
        return false;

      }
      //return (this.usuarioService.role === 'ADMIN_ROLE') ? true : false;
      

  }
  
}
