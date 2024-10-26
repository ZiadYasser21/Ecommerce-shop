import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';







@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any[] = [];
  searchTerm:string ='';

  constructor(private _ProductsService:ProductsService, private _ToastrService:ToastrService , 
    private _CartService:CartService)
  {

  }


  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{this.products = response.data
      }
      
    })
  }

  addToCart(productId:string)
  {
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{
        this._CartService.numberOfCartItems.next(response.numOfCartItems)
        console.log(response)
        this._ToastrService.success(response.message)
      },
      error:(err)=>console.log(err)
    })
  }

}
