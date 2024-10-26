import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService)
  {
    if(localStorage.getItem('userToken')!== null)
    {
      _Router.navigate(['/home'])
    }
  }
  isloading:boolean=false;
  apiError:string='';
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required]),
   

  });

  handleLogin(loginForm:FormGroup)
  {
    this.isloading =true
    if(loginForm.valid)
    {
    
      this._AuthService.login(loginForm.value).subscribe({
        next:(response:any )=>
        {
          if(response.message==='success')
          {
            localStorage.setItem('userToken',response.token)
            this._AuthService.decodeUserData();
            this._ToastrService.success("Success Login")
            this._Router.navigate(['/home'])
          }
        },
        error:(err:any)=>{
        this.isloading=false;
        this._ToastrService.error("Wrong Login")
        // this.apiError = err.error.errors.msg
        }
        
        
      })
      
    }
  }


}
