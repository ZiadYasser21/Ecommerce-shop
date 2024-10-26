import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  cartDetails:any=null;
  ToastrService: any;

  constructor(private _CartService:CartService){}

  updateItemCount(productId:string, count:number)
  {
    this._CartService.updateItemCount(productId,count).subscribe({

      next:(response)=>{
        this.cartDetails = response.data;
        console.log(response.data)
      },
      error:(err)=>console.log(err),

    })
  }

  removeItem(productId:string)
  {
    this._CartService.removeCartItem(productId).subscribe({
      next:(response)=>{
        this.cartDetails = response.data;

        console.log(response.data)
      },
      error:(err)=>console.log(err),

    })
  }

  clear():void
  {
    this._CartService.clearAllCart().subscribe({
      next:(response)=>{
        if(response.message==='success')
        {
          this.cartDetails = null;

        }
      }
    })
  }

  ngOnInit(): void {
    this._CartService.getLogggedUserCart().subscribe({
      next:(response)=>{
        this.cartDetails = response.data
        console.log(response.data)
      },
      error:(err)=>console.log(err),

      
    })
  }


}
