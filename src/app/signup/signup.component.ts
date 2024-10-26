import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  ToastrService: any;
  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService )
  {
    if(localStorage.getItem('userToken')!== null)
    {
      _Router.navigate(['/home'])
    }
  }
  isloading:boolean=false;
  apiError:string='';
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required , Validators.minLength(3)]),
    email:new FormControl(null, [Validators.required , Validators.email]),
    password:new FormControl(null, [Validators.required]),
    rePassword:new FormControl(null, [Validators.required]),
    phone:new FormControl(null, [Validators.required]),

  });

  handleRegister(registerForm:FormGroup)
  {
    this.isloading =true
    if(registerForm.valid)
    {
    
      this._AuthService.register(registerForm.value).subscribe({
        next:(response:any )=>
        {
          if(response.message==='success')
          {
            this._ToastrService.success("Register success")

            this._Router.navigate(['/login'])
          }
        },
        error:(err:any)=>{
        this.isloading=false;
        this._ToastrService.error("Register Wrong")
        this.apiError = err.error.errors.msg
        }
        
        
      })
      
    }
  }

}
