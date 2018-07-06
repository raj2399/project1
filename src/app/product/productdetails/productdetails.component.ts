import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from "@angular/router";
import { prod } from "../../product/product";
import { cate } from ".././category";
import { ProductService } from ".././product.service";
import { CategoryService } from ".././category.service";
import { qty } from '../qtyupdate';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id:number;
  arr:prod[]=[];
  fk_catid:number;
  arr1:prod[]=[];
  id1:number;
  qt:number;
  q:string;

  constructor(private _abc:ProductService,private _route:Router,private _ac:ActivatedRoute,private _cate:CategoryService) { }

  ngOnInit() {
    this._ac.params.subscribe(
      (x:Params)=>{
        this.id=x['id'];
      }
    );
    this._abc.getProductById(this.id).subscribe(
      (data:prod[])=>{
        //console.log(data);

        this.arr=data;
        this.fk_catid=data[0].fk_cat_id;
        this.id1=data[0].p_id;
        console.log(this.fk_catid);
        this._cate.getSameProductByCatId(this.fk_catid,this.id1).subscribe(
          (data:prod[])=>{
            console.log(this.fk_catid);
            //console.log(this.id1);
            this.arr1=data;
            //console.log(this.id1);
            this._abc.checkQty(this.id1).subscribe(
              (data:qty[])=>{
                  this.qt=data[0].p_soh;
                  console.log(this.qt);
                  if(this.qt>=1){
                      this.q="Available";
                  }
                  else
                  {
                    this.q="Out Of stock";
                  }
              }
            );
        }
        );


      }
    );
  }
  ondes(id) {
    this.id=id;
    this._abc.getProductById(this.id).subscribe(
      (data:prod[])=>{
        console.log(data);

        this.arr=data;
        this.fk_catid=data[0].fk_cat_id;
        this.id1=data[0].p_id;
        this._cate.getSameProductByCatId(this.fk_catid,this.id1).subscribe(
          (data:prod[])=>{
            console.log(this.fk_catid);
            console.log(this.id1);
            this.arr1=data;
            console.log(data);
        }
        );


      }
    );
      }
      onAdd(item){
        this.id=item.p_id;
        this._route.navigate(['/order',this.id]);
      }
}
