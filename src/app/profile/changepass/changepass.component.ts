import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../../signup/signup.service';
import { customer } from '../../signup/customer';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  pass:string;
  c_id:string;
  pass1:string;
  pass2:string;
  arr:customer[]=[];

  constructor(private _abc:Router,private _sign:SignupService) { }

  ngOnInit() {
    this.c_id=localStorage.getItem('c_id');
    this._sign.getCustomer(this.c_id).subscribe(
      (data:any[])=>
      {
        this.arr=data;
        this.c_id=data[0].c_id;
      }
    );
  }
  onSave(){
          if(this.pass1==this.pass2){
            this._sign.updateCustomerPassword(new customer(this.c_id,this.pass1)).subscribe(

              (data:any)=>{
                console.log(this.pass1);

              }
            );
          }
          else
          {
            alert("Password missmatch");
          }


  }
  oncan(){
    this._abc.navigate(['/']);
  }

}
