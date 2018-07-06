import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { customer } from '../../signup/customer';
import { SignupService } from '../../signup/signup.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
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

  constructor(private _acroute: ActivatedRoute,
    private _abc: SignupService,
    private _route: Router) { }

  ngOnInit() {

    this.c_id=localStorage.getItem('c_id');
    // this.email = this._acroute.snapshot.params["email"];
    this._abc.getCustomer(this.c_id).subscribe((data: customer[]) => {
      console.log(data);
      this.c_id = data[0].c_id;
      this.password = data[0].Password;
      this.c_name = data[0].c_name;
      this.age=data[0].age;
      this.mob = data[0].mob;
      this.city = data[0].city;
      this.gender = data[0].gender;
      this.address = data[0].address;

  });
}
onview() {
  this._route.navigate(["/profile"]);
}
onSave()
{
  this._abc.updateCustomer(new customer(this.c_id,this.password,this.c_name,this.age,this.mob,this.city,this.gender,this.address),this.c_id).subscribe(
    (data:any)=>{
      console.log(data);
      this._route.navigate(['/profile']);
    }
  );

}
onChange() {
  this._route.navigate(["/changepass"]);
}
  }


