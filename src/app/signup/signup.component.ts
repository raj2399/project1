import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from './customer';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  c_id:string;
  password:string;
  c_name:string;
  mob:string;
  age:number;
  city:string;
  gender:string;
  address:string;
  sta:string[]=[
    'ahmedaba',
    'rajkot',
    'surat'
  ];
  arr:customer[]=[];

  noarr:Number[]=[];
  constructor(private _xyz:SignupService,private _route:Router) { }

  ngOnInit() {
    for(let i=1;i<=50;i++)
    {
      this.noarr.push(i);
    }

  }
  onAdd()
  {
    this._xyz.addCustomer(new customer(this.c_id,this.password,this.c_name,this.age,this.mob,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        this.arr.push(new customer(this.c_id,this.password,this.c_name,this.age,this.mob,this.city,this.gender,this.address));
        this._route.navigate(['/']);
      }
      );

  }
  oncan(){
    this._route.navigate(['/']);
  }


}
