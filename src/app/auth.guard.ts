import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private _Router:Router){}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      if(localStorage.getItem("userToken") !== null)
      {
        return true;
      }
      else
      {
        this._Router.navigate(["/login"])
        return false;
      }
  }

}
