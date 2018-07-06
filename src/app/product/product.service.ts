import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { prod } from './product';
import {qty} from './qtyupdate'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string='http://localhost:3000/pro_tbl/';
  changeqty:string='http://localhost:3000/checkqty/';

  constructor(private _abc:HttpClient) { }
  getproduct(){
    return this._abc.get(this.url);
  }
  getProductById(p_id:number){
    return this._abc.get(this.url+p_id);
  }
  checkQty(p_id:number){
    return this._abc.get(this.changeqty+p_id);
  }
  updateqty(item:qty){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._abc.put(this.changeqty,body,{headers:_abc});
  }


}
