import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandComponent } from './brand/brand.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MySettingComponent } from './my-setting/my-setting.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path : '', redirectTo:'home',pathMatch:'full'},
  {path : 'home',canActivate:[AuthGuard], component:HomeComponent,title:"Home"},
  {path : 'products',canActivate:[AuthGuard], component:ProductsComponent,title:"Products"},
  {path : 'productdetails/:id',canActivate:[AuthGuard], component:ProductdetailsComponent,title:"Product Details"},
  {path : 'checkout/:id',canActivate:[AuthGuard], component:CheckoutComponent,title:"Online Payment"},
  {path : 'login', component:LoginComponent,title:"LogIn"},
  {path : 'signup', component:SignupComponent,title:"Signup"},
  {path : 'cart',canActivate:[AuthGuard], component:CartComponent,title:"Cart"},
  {path : 'checkout',canActivate:[AuthGuard], component:CheckoutComponent,title:"CheckOut"},
  {path : 'categories',canActivate:[AuthGuard], component:CategoriesComponent,title:"Categories"},
  {path : 'brand',canActivate:[AuthGuard], component:BrandComponent,title:"Brand"},
  {path : 'forgetPassword', component:MySettingComponent,title:"forgetPassword"},
  {path : 'my-setting',canActivate:[AuthGuard], component:MySettingComponent,title:"Setting"},
  {path : '**', component:NotfoundComponent,title:"Error 404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
