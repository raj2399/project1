import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { ord } from "../order/order";
import { myord } from './orderdetails';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
url:string='http://localhost:3000/order_tbl/';
url1:string='http://localhost:3000/order_id/';
  constructor(private _http:HttpClient) { }
  addCustomer(item:ord){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
}
orderByCustomerId(c_id:string){
  return this._http.get(this.url1+c_id);
}
getLastOrderId(){
  return this._http.get(this.url1)
}
}
