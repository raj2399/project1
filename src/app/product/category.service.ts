import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { prod } from './product';
import { cate } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url:string='http://localhost:3000/cat_tbl/'
  constructor(private _abc:HttpClient) { }
  getProductByCatName(cat_name:string){

    return this._abc.get('http://localhost:3000/catname/'+cat_name);
  }
  getSameProductByCatId(cat_id:number,p_id:number){
    return this._abc.get('http://localhost:3000/pro1_tbl/'+cat_id+'/'+p_id);
  }
  geAllcate(){
    return this._abc.get(this.url);
  }
}
