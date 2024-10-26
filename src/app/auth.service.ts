import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData=new BehaviorSubject(null);

  constructor(private __HttpClient:HttpClient, private _router:Router) {

    if(localStorage.getItem('userToken') !== null)
    {
      this.decodeUserData()
    }
   }

  decodeUserData()
  {
   let encodedToken= JSON.stringify( localStorage.getItem('userToken'));
   let decodedToken:any = jwtDecode(encodedToken);
   console.log(decodedToken);
   this.userData.next( decodedToken);
  }

  register(userData:object):Observable<any>
  {
    return this.__HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData)
  }

  
  login(userData:object):Observable<any>
  {
    return this.__HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }

  logOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login'])
  }
}
// https://ecommerce.routemisr.com/api/v1/auth/signin
// //route-ecommerce.onrender.com/api/v1/auth/signin
// https://ecommerce.routemisr.com/api/v1/auth/signup