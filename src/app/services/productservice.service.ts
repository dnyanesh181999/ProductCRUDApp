import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  
  saveProduct(prod:Product){
    console.log("in saveProduct method")
  return this.http.post('http://localhost:9090/product/saveProduct',prod);
  
  }
  deleteProduct(productId:number){
   return this.http.delete(`http://localhost:9090/product/product/${productId}`)

  }
  getSingleProduct(productId:number){
   return this.http.get(`http://localhost:9090/product/product/${productId}`)

  }
  getAllProduct(){
    return this.http.get('http://localhost:9090/product/products');
  }
  updateProduct(prod:Product){
    return this.http.put(`http://localhost:9090/product/product/${prod.productId}`,prod)
  }
}
