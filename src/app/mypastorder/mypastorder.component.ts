import { Component, OnInit } from '@angular/core';
import { customer } from '../signup/customer'
import { prod } from '../product/product';
import { ord } from '../order/order';
import { ProductService } from '../product/product.service';
import { SignupService } from '../signup/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from '../order/order.service';
import { myord } from '../order/orderdetails';

@Component({
  selector: 'app-mypastorder',
  templateUrl: './mypastorder.component.html',
  styleUrls: ['./mypastorder.component.css']
})
export class MypastorderComponent implements OnInit {
c_id:string;
msg:string;
status:string;
arr:myord[]=[];
  constructor(private _abc:OrderService) { }

  ngOnInit() {
    this.c_id=localStorage.getItem('c_id');

    this._abc.orderByCustomerId(this.c_id).subscribe(
      (data:myord[])=>
      {
        this.arr=data;
        this.status=data[0].o_status;
        console.log(this.status);

      }
    );


  }

}
