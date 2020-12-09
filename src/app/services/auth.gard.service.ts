import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RedirectService } from './redirect.service';
import { error } from 'protractor';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class AuthGardService implements CanActivate {

  constructor(private auth:AuthService ,private router:Router) {
   }
  
  canActivate(route,state:RouterStateSnapshot){
   
    return this.auth.cureentUser().pipe(map(user=>{
      if(user) return true;
      this.router.navigate(['/login'],{queryParams:{prevUrl: state?.url}});
      return false
    }),catchError((err,caught) =>{
     
      this.router.navigate(['/login'],{queryParams:{prevUrl: state?.url}});
      return of(false);
    }))
    return false
    
  }

}
