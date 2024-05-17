import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductserviceService } from '../../services/productservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{
product:Product[]
constructor(private ps:ProductserviceService,private router:Router){}
  ngOnInit(): void {
    this.ps.getAllProduct().subscribe((prod:Product[])=>{
      this.product = prod;
    })
  }
  deleteProduct(productId:number){
    this.ps.deleteProduct(productId).subscribe()
    window.location.reload();
  }
  editproduct(product:Product){
    this.router.navigateByUrl(`/product/edit/${product.productId}`)
  }
}
