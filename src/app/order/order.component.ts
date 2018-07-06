import { Component, OnInit } from '@angular/core';
import { customer } from '../signup/customer'
import { prod } from '../product/product';
import { ord } from '../order/order';
import { ProductService } from '../product/product.service';
import { SignupService } from '../signup/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from './order.service';
import { qty } from '../product/qtyupdate';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  c_id:string;
  c_name:string;
  p_id:number;
  p_name:string;
  price:number;
  qty1:number;
  fk_cat_id:number;
  arr:customer[];
  product:prod[];
  status:string='Pending';
  address:string;
  i:number;
  j:number;
  date:string='02/07/2018';
  arr1:ord[]=[];
  o_id:number;
  qty:number;
  noarr:number[]=[];
  price1:number;
  constructor(private _abc:Router,private _sign:SignupService,private _product:ProductService,private _active:ActivatedRoute,private _xyz:OrderService) { }

  ngOnInit() {
     this.p_id = this._active.snapshot.params["id"];
    this.c_id=localStorage.getItem('c_id');


    this._sign.getCustomer(this.c_id).subscribe(
      (data:customer[])=>
      {
        this.arr=data;
        this.c_id=data[0].c_id;
        this.c_name=data[0].c_name;
        this.address=data[0].address;
        this._product.getProductById(this.p_id).subscribe(
          (data:prod[])=>{
            console.log(data);
            this.product=data;
            this.fk_cat_id=data[0].fk_cat_id;
            this.p_id=data[0].p_id;
            this.p_name=data[0].p_name;
            this.price=data[0].price;
            this.qty=data[0].p_soh;
            for(let j=1;j<=this.qty;j++)
            {
              console.log(this.qty);
              this.noarr.push(j);
            }


          }
        );
        this._xyz.getLastOrderId().subscribe(
          (data:ord[])=>{
            this.i=data[0].o_id;
            console.log(this.i);
          }
        );

      }
    );
    console.log(this.qty);


  }
  Placeorder(){
    this.price1=this.qty1*this.price;
    this.o_id=this.i+1;
    this.qty=this.qty-1;
      this._xyz.addCustomer(new ord(this.o_id,this.status,this.date,this.price1,this.c_id,this.p_id)).subscribe(
        (data:any)=>{
          console.log(this.price1);
          this.arr1.push(new ord(this.o_id,this.status,this.date,this.price1,this.c_id,this.p_id));
          this._product.updateqty(new qty(this.p_id,this.qty)).subscribe(
            (data:any)=>{
                alert("SUCCESFULLY ORDER");
                this._abc.navigate(['/proddata',this.p_id]);
            }
          )
        }
        );



  }

  }


