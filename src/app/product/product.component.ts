import { Component, OnInit } from '@angular/core';
import { prod } from "../product/product";
import { cate } from "./category";
import { ProductService } from "./product.service";
import { CategoryService } from "./category.service";
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
arr:prod[]=[];
arr1:cate[]=[];
  constructor(private _abc: ProductService, private _route: Router,private _xyz:CategoryService) { }

  ngOnInit() {
    this._xyz.geAllcate().subscribe(
      (data:cate[])=>{
        this.arr1=data;
      }
    );
    this._abc.getproduct().subscribe((data: prod[]) => {
      this.arr = data;
      console.log(this.arr);

    });
  }
  ondes(item: prod) {
    this._route.navigate(["/proddata", item.p_id]);
  }
  onMob(item){
    this.arr.splice(0,this.arr.length);
    this._xyz.getProductByCatName(item.cat_name).subscribe(
      (data:prod[])=>{
        this.arr=data;
      }
    );

  }

  }


