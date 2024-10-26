import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
  

})
export class ProductdetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService, 
    private _CartService:CartService , private _ToastrService:ToastrService){}

  productDetails:any;
  productId:any;
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe( (params)=> {
      this.productId = params.get('id')

    });

    this._ProductsService.getProductsDetails(this.productId).subscribe({
      next:(response)=>{
        this.productDetails =response.data
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav:true
  }


}
