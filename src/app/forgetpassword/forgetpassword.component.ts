import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpassService } from '../forgetpass.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  private _ForgetpassService: any;
  _userMsg: any;

  constructor(private ForgetpassService:ForgetpassService, private _Router:Router){}


  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;

  email:string ='';

  userMsg:string = '';

  forgetForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required , Validators.email])
    
  });

  resetCodeForm:FormGroup = new FormGroup({
    resetCode:new FormControl('')
  });


  resetPassword:FormGroup = new FormGroup({
    // email:this.forgetForm.get('email')?.value
    newPassword:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)])
  });

  forgetPassword(): void
  {
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;

    this.ForgetpassService.forgetPassword(userEmail).subscribe({
      next:(response)=>
      {
        console.log(response);
        this.userMsg = response.message
        this.step1 =false;
        this.step2 = true;
        
      },
      error:(err)=>
      {
        this.userMsg = err.error.message
      }
    })
   
      
  }

  resetCode():void
  {
   let resrtCode = this.resetCodeForm.value;
   this.ForgetpassService.resetCode(resrtCode).subscribe({
    next:(response)=>
    {
      console.log(response);
      this.userMsg = response.status
      this.step2 = false;
      this.step3 = true;
      
    },
    error:(err)=>
    {
      this.userMsg = err.error.message
    }

   })

  }

  newPassword():void
  {
    let resetForm = this.resetPassword.value;
    resetForm.email = this.email;
    this.ForgetpassService.resetPassword(resetForm).subscribe({
      next:(response)=>
      {
        if(response.token)
        {
          localStorage.setItem('_token',response.token)
          this._Router.navigate(['/home'])

        }

        console.log(response);
        
      },
      error:(err)=>
      {
        this.userMsg = err.error.message
      }
    });
  }


}
