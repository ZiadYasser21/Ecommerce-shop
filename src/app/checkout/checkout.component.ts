import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute} from '@angular/router';






@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _CartService:CartService, private _ActivatedRoute:ActivatedRoute){}

    cartId:string|null='';

  shippingAdress:FormGroup = new FormGroup({

    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),

  });


  handleSubmit(): void
  {
    this._CartService.OnlinePayment( "65342d2372bcc8f9abbcef34" ,this.shippingAdress.value).subscribe({ 
      next:(response:any)=>{

        if(response.status == "success")
        {
          window.open(response.session.url, '_self');
        }

      },
      error:(err)=>console.log(err)

    });
    
  }



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>
      {
      this.cartId = params.get('id')
      console.log(this.cartId);
      
      },
    });
  }

}
