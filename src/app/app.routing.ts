import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { Component } from '@angular/core';
import { ChangepassComponent } from './profile/changepass/changepass.component';
import { ForgetComponent } from './login/forget/forget.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { OrderComponent } from "./order/order.component";
import { MypastorderComponent } from './mypastorder/mypastorder.component';
const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'EditProfile',component:UpdateprofileComponent},
  {path:'changepass',component:ChangepassComponent},
  {path:'forgetpass',component:ForgetComponent},
  {path:'proddata/:id', component:ProductdetailsComponent},
  {path:'myorder',component:MypastorderComponent},
  {path:'order/:id',component:OrderComponent}
];
export const routing =RouterModule.forRoot(arr);

