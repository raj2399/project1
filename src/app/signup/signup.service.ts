import { Injectable } from '@angular/core';
import { customer } from './customer';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url:string='http://localhost:3000/customer_tbl/';
  private changepass:string='http://localhost:3000/customer1_tbl/'
  constructor(private _http:HttpClient) { }

  addCustomer(item:customer){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
}
  getCustomer(c_id:string){

    return this._http.get(this.url+c_id);
  }
  updateCustomer(item:customer,c_id:string){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.put(this.url+c_id,body,{headers:_abc});
  }
  updateCustomerPassword(item:customer){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.put(this.changepass,body,{headers:_abc});
  }

}
