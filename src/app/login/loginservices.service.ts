import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { log } from './login'

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  private url:string='http://localhost:3000/customer_tbl/'
  constructor(private _http:HttpClient) { }
  getCustomerById(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+item.c_id,body,{headers:head1});
  }

}
