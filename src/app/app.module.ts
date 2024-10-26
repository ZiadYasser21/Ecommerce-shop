import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './brand/brand.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { SliderCategoriesComponent } from './slider-categories/slider-categories.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './loading.interceptor';
import { MySettingComponent } from './my-setting/my-setting.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    BrandComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    SliderCategoriesComponent,
    SearchPipe,
    CheckoutComponent,
    MySettingComponent,
    ForgetpasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}

],
  bootstrap: [AppComponent]
})
export class AppModule { }
