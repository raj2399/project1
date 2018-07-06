import { Component, OnInit } from '@angular/core';
import { log } from './login';
import { LoginservicesService } from './loginservices.service';
import { Router,ActivatedRoute } from '@angular/router';
import { customer } from "../signup/customer";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string;
  pass: string;
  list: customer[] = [];
  constructor(private _abc: LoginservicesService, private _xyz: Router) { }

  ngOnInit() {

  }

  onSave() {
    this._abc
      .getCustomerById(new customer(this.id, this.pass))
      .subscribe((data: customer[]) => {
        console.log(data);
        if (data.length==1) {
          localStorage.setItem('c_id',this.id);
          this._xyz.navigate(["/product"]);
        } else {
          alert("Id & password not match");
        }
      });
  }
  onSign() {
    this._xyz.navigate(["/signup"]);
  }
  onforget(){
    this._xyz.navigate(["/forgetpass"]);
  }

}
