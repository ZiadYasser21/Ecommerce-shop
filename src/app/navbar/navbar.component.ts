import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean = false;
  cartNumber:number =0;
  logOut()
  {
    this._AuthService.logOut();
  }
  constructor(private _AuthService:AuthService, private _CartService:CartService)
  {

    _CartService.numberOfCartItems.subscribe({

      next:(x)=>this.cartNumber=x

    })
   
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue() !== null)
        {
          this.isLogin = true;
        }
        else
        {
          this.isLogin = false;
        }
      }
    })

  }

  LogOut()
  {
    this._AuthService.logOut()
  }
}
