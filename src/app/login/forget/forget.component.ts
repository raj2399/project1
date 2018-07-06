import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../../signup/signup.service';
import { customer } from '../../signup/customer';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
c_id:string;
password:string;
  constructor(private _acroute: ActivatedRoute,
    private _abc: SignupService,
    private _route: Router) { }

  ngOnInit() {
  }
  check()
  {
    this._abc.getCustomer(this.c_id).subscribe(
      (data:customer[])=>{

        if(data.length>0)
        {
          this.password=data[0].Password;
          alert("Your Password Is :"+this.password);
        }
        else
        {
          alert("Your Email id is wrong");
        }
        this._route.navigate(['/']);
      }
    );
  }

}
