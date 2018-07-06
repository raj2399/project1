import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import {routing } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { ChangepassComponent } from './profile/changepass/changepass.component';
import { ForgetComponent } from './login/forget/forget.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { OrderComponent } from './order/order.component';
import { MypastorderComponent } from './mypastorder/mypastorder.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    HeaderComponent,
    ProfileComponent,
    UpdateprofileComponent,
    ChangepassComponent,
    ForgetComponent,
    ProductdetailsComponent,
    OrderComponent,
    MypastorderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
