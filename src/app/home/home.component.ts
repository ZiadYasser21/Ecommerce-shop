import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] = [];
  searchTerm:string ='';


  constructor(private _ProductsService:ProductsService, private _CartService:CartService,
     private _ToastrService:ToastrService){}

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

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(response)=>this.products = response.data
    })
  }

}
