import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate  {
  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    if(token){
      const tokendecode =JSON.parse(atob(token.split('.')[1]));
      console.log(tokendecode);
      if(tokendecode.isAdmin){
        return true;
      }
    }
      alert("you are not authorised");
      this.router.navigate(["/"]);
      return false;
  }
}
